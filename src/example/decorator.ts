// 1. 基础
// 1.1 装饰器定义
/*
function setProp(target){
    // ...
}
@setProp */

// 1.2 装饰器工厂
/*
function setProp(){
    return function(target){
        // ...
    }
}
setProp()
*/

// 1.3 装饰器组合
/*
@setProp
@setName
@setAge
*/

/*
function setName() {
  console.log("get setName");
  return function (target) {
    console.log("setName");
  };
}
function setAge() {
  console.log("get setAge");
  return function (target) {
    console.log("setAge");
  };
}
@setName()
@setAge()
class ClassDesc{

}
*/
// 1.4 装饰器求值
// 2. 类装饰器
/* let sign = null;
function setName(name: string) {
  return (target: new () => any) => {
    sign = target;
    console.log(target.name);
  };
}
@setName("nate")
class ClassDesc {
  constructor() {}
}
console.log(sign === ClassDesc);

function addName(constructor: new () => any) {
  constructor.prototype.name = "nate";
}
@addName
class ClassD {}
interface ClassD{
    name: string
}
const d = new ClassD();
console.log(d.name); */

/* function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    public newProperty = "new property";
    public hello = "override";
  };
}
@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
console.log(new Greeter('world')) */

// 3. 方法装饰器: 用来处理类中的方法，可以用来处理方法的属性描述符，可以处理方法的定义。
// 方法装饰器在运行时被当作函数调用的，包含三个参数：
// 第一个参数分为两种情况：
// 一、当装饰的是静态函数的时候，第一个参数是类的构造函数
// 二、当装饰的是实例成员的时候，第一个参数是类原型对象
// 第二个参数是成员的名字
// 第三个参数是成员的属性描述符: configurable writeable enumerable
/* interface ObjWithAnyKeys{
    [key: string]: any
}
var obj12: ObjWithAnyKeys = {}
Object.defineProperty(obj12, 'name', {
    value: 'nate',
    writable: false,
    // configurable: false,
    configurable: true,
    enumerable: true
})
console.log(obj12.name)
// writable: false, 值不变
obj12.name="nate1"
console.log(obj12.name)

//configurable 是不可逆操作，当给一个属性设置了configurable:false之后，就不能在通过Object.defineProperty修改属性修饰符了
Object.defineProperty(obj12, 'name', {
    value: 'nate3',
    writable: true,
})
console.log(obj12.name) */

// 修改方法属性描述符
/* function enumerable(bool: boolean) {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log(target, propertyName);
    descriptor.enumerable = bool;
  };
}

class ClassF {
  constructor(public age: number) {}
  @enumerable(false)
  public getAge() {
    return this.age;
  }
}
const classF = new ClassF(18);
console.log(classF);
for (const key in classF) {
  console.log(key);
} */

// 修改属性返回值
/* function enumerable(bool: boolean) {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): any => {
    return {
      value() {
        return "not age";
      },
      enumerable: bool,
    };
  };
}
class ClassF {
  constructor(public age: number) {}
  @enumerable(false)
  public getAge() {
    return this.age;
  }
}
const classF = new ClassF(18);
console.log(classF.getAge()); */

// 4. 访问器装饰器： set get
/* function enumerable(bool: boolean) {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): any => {
    descriptor.enumerable = bool;
  };
}
class ClassG {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  @enumerable(true)
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const classG = new ClassG("nate");
for (const key in classG) {
  console.log(key);
} */
// 5. 属性装饰器
/* function printPropertyName(target: any, propertyName: string) {
  console.log(propertyName);
}
class ClassH {
  @printPropertyName
  name: string;
} */

// 6. 参数装饰器
function required(target: any, propertyName: string, index: number) {
  console.log(`修饰的是${propertyName}的第${index + 1}个参数`);
}
class ClassI {
  public name: string = "nate";
  public age: number = 18;
  getInfo(prefix: string, @required infoType: string): any {
    return prefix + " " + this[infoType];
  }
}
interface ClassI {
  [key: string]: string | number | Function;
}
const classI = new ClassI();
classI.getInfo("hihi", "age");
