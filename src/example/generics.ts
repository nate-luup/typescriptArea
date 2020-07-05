// 下面的例子丢失了对类型的检测
// const getArray = (value: any, times: number = 5): any[] => {
//   return new Array(times).fill(value);
// };
// console.log(
//   getArray(1, 4).map((item) => {
//     return item.length;
//   })
// );
// console.log(
//   getArray("abc", 4).map((item) => {
//     return item.length;
//   })
// );

// 1. 简单使用
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};
console.log(
  getArray<number>(1, 4).map((item) => {
    return item.toFixed;
  })
);

// 2. 泛型变量
// 任意大写字母
const getArray1 = <T, U>(param1: T, param2: U, times: number = 5): [T, U][] => {
  return new Array(times).fill([param1, param2]);
};
console.log(
  getArray1(1, "a", 3).forEach((item) => {
    console.log(item[0].toFixed());
    console.log(item[1].length);
  })
);

// 3. 泛型类型
let getArray2: <T>(arg: T, times: number) => T[];
getArray2 = (arg: any, times: number) => {
  return new Array(times).fill(arg);
};
// getArray2(123, 3).map((item) => {
//   return item.length;
// });

// 使用类型别名
type GetArray = <T>(arg: T, times: number) => T[];
let getArray3: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg);
};
// 使用接口
interface GetArrayI<T> {
  (arg: T, times: number): T[];
  innerArray: T[];
}
let getArray4 = (): GetArrayI<number> => {
  const c = (arg, times): number[] => {
    const innerArray = new Array(times).fill(arg);
    c.innerArray = innerArray;
    return innerArray;
  };
  c.innerArray = [];
  return c;
};

// 4. 泛型约束
// 示例value必须是带有length属性的
interface ValueWithLenght {
  length: number;
}
const getArray5 = <T extends ValueWithLenght>(
  value: T,
  times: number = 5
): T[] => {
  return new Array(times).fill(value);
};
getArray5([1, 2, 3], 4);
getArray5("123", 4);
getArray5(
  {
    length: 3,
  },
  4
);

// 5. 在泛型约束中使用类型参数
// 定义一个对象，只能访问对象上存在的属性
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
const objs = {
  a: "a",
  b: "b",
};
getProps(objs, "a");
// getProps(objs, "c");
