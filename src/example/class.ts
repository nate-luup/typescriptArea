// 1. 基础
/* class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getPosition() {
    return `(${this.x}, ${this.y})`;
  }
}
const point = new Point(1, 2);
console.log(point);

class Parent {
  name: string;
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name: string) {
    super(name);
  }
} */

// 2. 修饰符
// public: 可以通过实例访问的，默认

// private
/* class Parent {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
}
const p = new Parent(18);
// console.log(p.age)
class Child extends Parent{
    constructor(age){
        super(age)
        // console.log(super.age)
    }
} */

// protected 受保护修饰符，在子类中可以访问
/* class Parent {
  protected age: number;
  protected constructor(age: number) {
    this.age = age;
  }
  protected getAge(){
      return this.age
  }
}
// protected构造方法不能实例化，只能通过子类继承进行实例化
// const p = new Parent(18);
// console.log(p.age)
class Child extends Parent{
    constructor(age){
        super(age)
        // 父类的protect属性子类不可以访问，protected方法子类可以访问
        // console.log(super.age)
        console.log(super.getAge())
    }
} */

// 3. readonly修饰符
/* class UserInfo {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const userInfo = new UserInfo("nate");
console.log(userInfo);
// userInfo.name='nate2' */

// 4. 参数属性
// 在参数前面加上访问限定符，即会帮我们指定属性的访问类型，也会吧属性放到实例上面
/* class A {
  constructor(public name: string) {}
}
const a1 = new A('nate');
console.log(a1) */

// 5. 静态属性
/* class B {
  public static age: number = 18;
  public static getAge() {
    return B.age;
  }
}
console.log(B.age) */

// 6. 可选类属性
/* class Info {
  public name: string;
  public age?: number;
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name;
    this.age = age;
  }
}
const info1 = new Info("nate");
console.log(info1);
const info3 = new Info("nate", 18);
console.log(info3);
const info4 = new Info("nate", 18, "male");
console.log(info4); */

// 7. 存取器
/* class Info {
  public name: string;
  public age?: number;
  private _infoStr: string;
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name;
    this.age = age;
  }
  get infoStr() {
    return this._infoStr;
  }
  set infoStr(value) {
    console.log(`setter: ${value}`);
    this._infoStr = value;
  }
}
const info4 = new Info("nate", 18, "male");
console.log(info4.infoStr);
info4.infoStr = "test"; */

// 8. 抽象类
/* abstract class People {
  constructor(public name: string) {}
  public abstract printName(): void;
}
// const p1 = new People("nate");
class Man extends People {
  constructor(name) {
    super(name);
  }
  printName() {
    console.log(this.name);
  }
}
const man = new Man("nate");
console.log(man);

abstract class P {
  public abstract _name: string;
  abstract get insideName(): string;
  abstract set insideName(value: string);
}
class S extends P {
  public _name: string;
  public insideName: string;
} */

// 9. 实例类型
/* class People {
  constructor(public name: string) {}
}
let p2 = new People("nate");
class Animal {
  constructor(public name: string) {}
}
p2 = new Animal('hh')
 */
// 10. 对前面跳过知识的补充
// 一、类实现一个接口，接口检测的是使用该接口定义的类的实例
interface FoodInterface {
  type: string;
}
class FoodClass implements FoodInterface {
  public type: string;
}
// 二、接口继承一个类
class A {
  protected name: string;
}
interface I extends A {}
// class B implements I {
//     name: string
// }
class B extends A implements I {
  name: string;
}

// 三、在泛型中使用类
const create = <T>(c: new () => T): T => {
  return new c();
};
class Infos {
  public age: number;
  constructor() {
    this.age = 18;
  }
}
console.log(create<Infos>(Infos).age)
// console.log(create<Infos>(Infos).name)
