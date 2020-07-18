// 对象的混入
interface ObjectA {
  a: string;
}
interface ObjectB {
  b: string;
}
let Aa: ObjectA = {
  a: "a",
};
let Bb: ObjectB = {
  b: "b",
};
let Ab: ObjectA & ObjectB = Object.assign(Aa, Bb);

// 类的混入
class ClassAa {
  isA: boolean;
  public funcA() {}
}
class ClassBb {
  isB: boolean;
  public funcB() {}
}
class ClassAB implements ClassAa, ClassBb {
  public isA: boolean= false;
  public isB: boolean = false;
  public funcA: () => void;
  public funcB: () => void;
}
function mixins(base: any, from: any[]) {
  from.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((key) => {
      console.log(key);
      base.prototype[key] = item.prototype[key];
    });
  });
}
mixins(ClassAB, [ClassAa, ClassBb]);
const ab = new ClassAB();
console.log(ab);
