// 1. 函数类型

// 1.1 为函数定义类型
// 1.2 完整的函数类型
let addF: (x: number, y: number) => number;
addF = (arg1: number, arg2: number): number => arg1 + arg2;

// 1.3 使用接口定义函数类型
interface AddI {
  (x: number, y: number): number;
}
let addI: AddI = (arg1, arg2) => arg1 + arg2;

// 1.4 使用类型别名
type AddAlias = (x: number, y: number) => number;
let addAlias: AddAlias = (x: number, y: number) => x + y;

// 2. 参数
// 2.1 可选参数
type OptionalArgs = (arg1: number, arg2: number, arg3?: number) => number;
let optionalArgs: OptionalArgs = (x: number, y: number) => x + y;

// 2.2 默认参数
let defaultArgs = (x: number, y = 3) => x + y;
defaultArgs(1, 2);
// defaultArgs(1, "2");

// 2.3 剩余参数
const handleData = (arg1: number, ...args: number[]) => {
  // ...
};

// 3. 重载
function overload(s: string): string[];
function overload(x: number): number[];
function overload(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((item) => Number(item));
  }
}
overload("abc").map((item) => {
  return item.toString();
});
overload(123).map((item) => {
  return item.toFixed();
});
