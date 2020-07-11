// 1. 交叉类型: 就是取多个类型的并集使用 & 符号
/* const mergeFun = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res;
};
let o1 = { a: "a" };
let o2 = { b: "b" };
mergeFun(o1, o2); */

// 2. 联合类型
/* const getLengthFunc = (content: string | number): number => {
  if (typeof content === "string") {
    return content.length;
  } else {
    return content.toString().length;
  }
};
console.log(getLengthFunc('abc'))
console.log(getLengthFunc(123))
// console.log(getLengthFunc(false)) */

// 3. 类型保护
const valueList = [123, "abc"];
const getRandomValue = () => {
  const numnber = Math.random() * 10;
  if (numnber < 5) {
    return valueList[0];
  } else {
    return valueList[1];
  }
};
const item = getRandomValue();
console.log(item);

// 3.1 不实用类型保护-类型断言
// if((item as string).length){
//     console.log((item as string).length)
// }else{
//     console.log((item as number).toFixed())
// }

// 3.2 类型保护：自定义函数
// function isString(value: string | number): value is string {
//   return typeof value === "string";
// }

// if(isString(item)){
//     console.log(item.length)
// }else{
//     console.log(item.toFixed())
// }

// 3.3 类型保护： typeof关键字
// 必须是相等或不相等比较
// 变量类型必须是 string|number|boolean|Symbol四种中的一种
// if (typeof item === "string") {
//   console.log(item.length);
// } else {
//   console.log(item.toFixed());
// }

// 3.4 类型保护： instanceof 关键字
// class CreateByClass1 {
//   public age = 18;
//   constructor() {}
// }
// class CreateByClass2 {
//   public name = "nate";
//   constructor() {}
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2();
// }
// const item1 = getRandomItem();
// if (item1 instanceof CreateByClass1) {
//   console.log(item1.age);
// } else {
//   console.log(item1.name);
// }

// 4. null和undefined
// undefined 是任何类型的子类型
// let values = '123'
// let values: string | undefined = '123';
// values = undefined; // 打开tsconfig中的strictNullChecks后就不可以这样赋值了
// ts中undefined和null是区别对待的，下面三种完全不同的类型
// string | undefined
// string | null
// string | undefined | null

// 打开 tsconfig 中的 strictNullChecks 后可选参数默认变成与undefined的联合类型
// const sumFunc = (x: number, y?: number) => {
//   return x + (y || 0);
// };

// 5. 类型保护和类型断言
/* const getLengthFunction = (value: string | null): number => {
  //   if (value === null) {
  //     return 0;
  //   } else {
  //     return value.length;
  //   }
  return (value || "").length;
};

// 使用!进行类型断言，保证值不为null
function getSplicedStr(num: number | null): string {
  function getRes(prefix: string) {
    return prefix + num!.toFixed().toString();
  }
  num = num || 0.1;
  return getRes("nate-");
}
console.log(getSplicedStr(2.2)) */

// 6. 类型别名
// 使用type关键字定义类型别名，类型别名就是给一种类型起一个名字，之后只要使用这个类型的地方都可以用这个名字
// 并不是创建了一个新的类型，类似于js中的对象赋值
type TypeString = string;
let str1: TypeString = "a";
// 类型别名使用泛型
type PositionType<T> = { x: T; y: T };
const position1: PositionType<number> = {
  x: 1,
  y: -1,
};
const position2: PositionType<string> = {
  x: "left",
  y: "top",
};
// 类型别名中可以引用自己,只能在对象属性上。例如：树形结构
type Childs<T> = {
  current: T;
  child?: Childs<T>;
};
let ccc: Childs<string> = {
  current: "first",
  child: {
    current: "first-01",
    child: {
      current: "first-01-01",
    },
  },
};
// 接口和类型别名有时候是起到同样的作用的
type Alias = {
  num: number;
};
interface Interface {
  num: number;
}
let _alias: Alias = {
  num: 123,
};
let _interface: Interface = {
  num: 123,
};
// 类型是兼容的
_alias = _interface;
// 什么时候使用接口？当定义的类型要用于拓展，用implements关键字实现的时候
// 是么时候使用类型别名？当无法使用接口，需要使用联合类型或元组类型的时候

// 7. 字面量类型
// 7.1 字符串字面量
type Name = "nate";
const name1: Name = "nate";
// const name2: Name = 'aaa';

type Direction = "north" | "south" | "east" | "west";

function getDirectionFirstLetter(direction: Direction) {
  return direction.substring(0, 1);
}
console.log(getDirectionFirstLetter("north"));
// console.log(getDirectionFirstLetter("hh"));

// 7.2 数字字面量
type Age = 18;
interface InfoInterface {
  name: string;
  age: Age;
}
let _info: InfoInterface = {
  name: "nate",
  age: 18,
};

// 8. 枚举成员类型
enum Animails {
  Rabbit = 1,
  Tiger = 2,
}
interface Rabbit {
  type: Animails.Rabbit;
}

// 9. 可辨识联合
// 可辨识联合两要素：
//   1. 具有普通的单例类型属性
//   2. 一个类型别名包含了哪些类型的联合

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function assertNever(value: never): never {
  throw new Error(`Unexpected object: ${value}`);
}
function getArea(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
      break;
    case "rectangle":
      return s.width * s.height;
      break;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s);
  }
}
