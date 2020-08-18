enum Rules {
  REQUIRED = "required",
  IS_NUMBER = "isnumber",
}
function fieldValidator(rules: string) {
  return function (target: any, propertyKey: string) {
    target[`${propertyKey}Validator`] = function () {
      const errors = [];
      const value: string = this[propertyKey] || "";
      const ruleArray = rules.split(",");
      for (const r of ruleArray) {
        switch (r) {
          case Rules.REQUIRED:
            errors.push({
              key: propertyKey,
              rule: r,
              isValid: value.length > 0,
            });
            break;
          case Rules.IS_NUMBER:
            errors.push({
              key: propertyKey,
              rule: r,
              isValid: Number.isInteger(value),
            });
            break;
        }
      }

      return errors;
    };
  };
}
class UserModel {
  @fieldValidator("required")
  public name: string;
  @fieldValidator("required,isnumber")
  public age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  validate() {
    let errors = [];
    const keys = Object.keys(this);

    for (const key of keys) {
      const validator = this[`${key}Validator`];
      if (validator) {
        const _fieldErrors = validator();
        errors = errors.concat(_fieldErrors);
      }
    }
    return errors;
  }
}

const user = new UserModel("", 10);
const errors = user.validate();
console.log(errors);
