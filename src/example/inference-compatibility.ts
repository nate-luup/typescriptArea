// 1. 类型推论
// (1) 基础
let userName = "nate";
// userName = 123;

// (2) 多类型联合
let cArray = [1, "5"]; // let cArray: (string | number)[]
cArray = [1, "5", 7, "a"];
// cArray = [false]

// (3) 上下文类型
window.onmousedown = (ev: MouseEvent) => {
  console.log(ev.clientX);
};

// 2. 类型兼容性
// (1) 基础
interface UserInfo {
  name: string;
}
let userInfo: UserInfo;
const userInfo1 = { name: "nate" };
const userInfo2 = { age: 18 };
const userInfo3 = { name: "nate", age: 18 };
userInfo = userInfo1;
// userInfo = userInfo2;
userInfo = userInfo3;

// (2) 函数兼容性
// (2.1) 参数个数
// 右边的参数个数必须小于等于左边的参数个数
let x = (a: number) => 0;
let y = (b: number, c: string) => 0;
y = x;
// x = y;

const arrs = [1, 2, 3];
arrs.forEach((value, index, arr) => {
  console.log(value);
});

// (2.2) 参数类型
let argTypeFn1 = (a: number) => 0;
let argTypeFn2 = (a: string) => 0;
// argTypeFn1 = argTypeFn2

// (2.3) 可选参数和剩余参数
let getSum = (
  args: number[],
  callback: (...args: number[]) => number
): number => {
  return callback(...args);
};
let result = getSum([1, 2, 3, 4], (...args: number[]): number => {
  return args.reduce((a, b) => a + b, 0);
});
console.log(`getSum: ${result}`);

// (2.4) 参数双向协变
let funcA = (arg: number | string): void => {};
let funcB = (arg: number): void => {};
funcA = funcB;
funcB = funcA;

// (2.5) 返回值类型
let fA = (): string | number => 0;
let fB = (): string => "a";
fA = fB;
// fB = fA;

// (2.6) 函数重载
function merge(arg1: number, arg2: number): number;
function merge(arg1: string, arg2: string): string;
function merge(arg1: any, arg2: any) {
  return arg1 + arg2;
}
merge(1, 2);
merge("1", "2");

// (3) 枚举
// 数字类型枚举与数值类型兼容
enum StatusI {
  On,
  Off,
}
enum StatusII {
  On,
  Off,
}
let s = StatusI.On;
s = 1;
// 在不同枚举间不兼容
// s = StatusII.On

// (4) 类
// 不会比较类的静态成员
class AnimalClass {
  public static age: number;
  constructor(public name: string) {}
}
class PeopleClass {
  public static age: string;
  constructor(public name: string) {}
}
class FooClass {
  constructor(public name: number) {}
}
let animal: AnimalClass;
let people: PeopleClass;
let foo: FooClass;
animal = people;
// animal = foo;

// 类的私有成员和受保护成员对兼容性有影响
class ParentClass {
  private age: number;
  constructor() {}
}
class ChildrenClass extends ParentClass {
  constructor() {
    super();
  }
}
class OtherClass {
  private age: number;
  constructor() {}
}

const children: ParentClass = new ChildrenClass();
// const other: ParentClass = new OtherClass();

// (5) 泛型
interface Data<T> {
  data: T;
}
let data1: Data<number>;
let data2: Data<string>;
// data1 = data2;
