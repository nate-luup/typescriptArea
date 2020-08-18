// 1. 布尔类型
// let bool: boolean = false
let bool: boolean;
bool = true;
// bool = 123;

// 2. 数值类型
let num: number;
num = 1;
// num ='abc';
num = 0b1111011;
num = 0o123;
num = 0x123;

// 3. 字符串类型
let str: string;
str = "abc";
str = `数值是${num}`;
console.log(str);

// 4. 数组类型
// [1,2,3]
// 写法1
let arr: number[];
// arr = [1, '5'];
arr = [5];
// 写法2 泛型
let arr2: Array<number>;
arr2 = [5];
// 写法三-联合类型
let arr3: (string | number)[];
arr3 = [1, "5"];
// https://juejin.im/post/5d0f886651882532995b773c

// 5. 元组类型: 固定长度，固定位置，固定类型的数组
let tuple: [string, number, boolean];
tuple = ["a", 1, false];

// 6. 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER,
}
console.log(Roles.SUPER_ADMIN);
console.log(Roles[0]);
// if(roles === Roles.SUPER_ADMIN){

// }

// 7. any 任意类型 尽量少用
let value: any;
value = 1;
value = true;
value = "a";
value = [1, "a", false];

// 8. void类型 什么类型都不是
const consoleText = (text): void => {
  console.log(text);
};
let v: void;
v = undefined;
// 在非严格模式下可以赋值
v = null;
consoleText("abc");

// 9. null 和 undefined： 在ts中既是值又是类型
let u: undefined;
u = undefined;
// u = 123;
let n: null;
// n= 123;
n = null;
// 在非严格模式下可以赋值
num = undefined;
num = null;

// 10. never类型： 不存在值的类型
// never类型是任意类型的子类型，但是没有任何类型是never的子类型
const errorFunc = (message: string): never => {
  throw new Error(message);
};
const infiniteFun = (): never => {
  while (true) {}
};
// 立即执行函数返回值是never类型
// let neverVariable = (()=>{
//     while (true) {}
// })()
// 不能将never类型赋值给数值类型
// neverVariable = 123;
// 可以将never类型变量赋值给数值类型
// num = neverVariable

// 10. object
let obj = {
  name: "nate",
};
let obj2 = obj;
obj2.name = "lisi";
console.log(obj.name);

function getObject(obj: object) {
  console.log(obj);
}
getObject({ name: "zhangsan" });

// 11. 类型断言
// 有时候ts并没有我们了解一个值的真实类型，这时候需要ts交给我们自己做类型检查
// 类型断言类似于类型转换，通过特定语法把某个值强行转换成我们需要的类型
// 语法：
//    1. (<string>target)
//    2. (target as string)
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};
console.log(getLength(1));
console.log(getLength("a"));
