// 1. this 类型
class Counter {
  constructor(public count: number) {}
  public add(value: number) {
    this.count = this.count + value;
    return this;
  }
  public substract(value) {
    this.count = this.count - value;
    return this;
  }
}
const counter1 = new Counter(2);
console.log(counter1.add(4).substract(3));

class PowCounter extends Counter {
  constructor(public count: number) {
    super(count);
  }
  public pow(value: number) {
    this.count = this.count ** value;
    return this;
  }
}
const counter2 = new PowCounter(2);
console.log(counter2.pow(3).add(2).substract(5));

// 2. 索引类型
// 2.1 索引类型查询操作符: keyof，连接一个类型，返回这个类型所有属性名组成的联合类型
interface InfoInterfaceAdvanced {
  name: string;
  age: number;
}
// 类型是 InfoInterfaceAdvanced 属性名组成的联合类型
let infoProp: keyof InfoInterfaceAdvanced;
infoProp = "name";
infoProp = "age";
// infoProp = 'sex'

// 通过和泛型联合使用，ts就可以检查使用动态属性名的代码
// 通过对象的属性名数组，获取对象的属性值数组
function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map((n) => {
    return obj[n];
  });
}
let infoObj = {
  name: "nate",
  age: 18,
};
console.log(getValue(infoObj, ["name"]));
console.log(getValue(infoObj, ["name", "age"]));

// 2.2 索引访问操作符: []
type NameType = InfoInterfaceAdvanced["name"];
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

interface Objs<T> {
  [key: string]: T;
}
let keys: keyof Objs<number>;
let oKeys: Objs<number>["name"];

interface Type {
  a: never;
  b: never;
  c: undefined;
  d: null;
  e: string;
  f: number;
  g: object;
}
type Test = Type[keyof Type];

// 3. 映射类型: 借助旧类型创建新类型的方式，可以用相同的方式转换旧类型中的每一个属性
// 3.1 基础

interface Info1 {
  age: number;
  name: string;
  sex: string;
}
// interface ReadonlyInfo1 {
//   readonly age: number;
//   readonly name: string;
//   readonly sex: string;
// }

// 简单映射类型
type ReadonlyType<T> = {
  readonly [P in keyof T]?: T[P];
};
type ReadonlyInfo1 = ReadonlyType<Info1>;

let info11: ReadonlyInfo1 = {
  age: 18,
  name: "nate",
  sex: "male",
};
// info11.age = 19;

// 由于将所有属性设置成 readonly 和 可选属性 很常用，所以ts内置了： Readonly Partial
let info12: Readonly<Info1> = {
  age: 18,
  name: "nate",
  sex: "male",
};
let info13: Partial<Info1> = {
  age: 18,
  name: "nate",
};
// 还有两个内置映射类型：Pick Record，可以通过查看 node_modules/typescript/lib/lib.es5.d.ts
// Pick:  From T, pick a set of properties whose keys are in the union K
interface Info2 {
  age: number;
  name: string;
  address: string;
}
let info14: Info2 = {
  age: 18,
  name: "nate",
  address: "address",
};
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {};
  keys.map((k) => {
    res[k] = obj[k];
  });
  return res;
}
const nameAndAddress = pick(info14, ["name", "address"]);
console.log(nameAndAddress);

let info15: Pick<Info2, "age" | "name"> = {
  age: 18,
  name: "nate",
};

// Record: Construct a type with a set of properties K of type T
function mapObject<K extends string | number, T, U>(
  obj: Record<K, T>,
  f: (x: T) => U
): Record<K, U> {
  let res: any = {};
  for (const key in obj) {
    res[key] = f(obj[key]);
  }
  return res;
}
const names = { 0: "hello", 1: "world", 2: "bye" };
const lengths = mapObject(names, (s) => {
  return s.length;
});
console.log(lengths);

// 3.2 由映射类型进行推断
type Proxy<T> = {
  get(): T;
  set(value: T): void;
};
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
function proxify<T>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>;
  for (const key in obj) {
    result[key] = {
      get: () => obj[key],
      set: (value) => {
        obj[key] = value;
      },
    };
  }
  return result;
}
let props = {
  name: "nate",
  age: 18,
};
let proxyProps = proxify(props);
console.log(proxyProps.name.get());
proxyProps.name.set("nate1");
console.log(proxyProps.name.get());

// 还原成原始类型
function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T;
  for (const k in t) {
    result[k] = t[k].get();
  }
  return result;
}
let originalProps = unproxify(proxyProps);
console.log(originalProps);

// 3.3 增加或移除特定修饰符
type RemoveReadonlyInfo1<T> = {
  -readonly [P in keyof T]-?: T[P];
};
type Info1WithoutReadonly = RemoveReadonlyInfo1<ReadonlyInfo1>;

// 3.4 keyof和映射类型在2.9的升级
const stringIndex = "a";
const numberIndex = 1;
const symbolIndex = Symbol();
type Obj2 = {
  [stringIndex]: string;
  [numberIndex]: number;
  [symbolIndex]: symbol;
};
type KesType = keyof Obj2;
type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P];
};
let objs3: Readonly<Obj2> = {
  a: "aa",
  1: 1,
  [symbolIndex]: Symbol(),
};
// objs3.a='bb';

// 3.5 元组和数组上的映射类型
type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>;
};
type Tuple = [number, string, boolean];
type PromiseTuple = MapToPromise<Tuple>;

let tuple1: PromiseTuple = [
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve("a")),
  new Promise((resolve, reject) => resolve(false)),
];

// 4. unknown
// 4.1 任何类型都可以赋值给unknow类型
let value1: unknown;
value1 = "a";
value1 = 1;
// 4.2 如果没有类型断言，或基于控制流的类型细化时，unknown不可以赋值给其它类型，此时他只能赋值给unknown和any类型
let value2: unknown;
// let value3: string = value2;
value2 = value1;
// 4.3 如果没有类型断言，或基于控制流的类型细化时，不能在他上面进行任何操作
let value4: unknown;
// value4 +=1;

// 4.4 unknown 与任何其它类型组成的交叉类型，最后都等于其它类型
type type1 = string & unknown;
type type2 = number & unknown;
type type3 = unknown & unknown;
type type4 = unknown & string[];

// 4.5 unknown 与任何其它类型组成的联合类型（除了any），都等于unknown类型
type type5 = unknown | string;
type type6 = unknown | any;
type type7 = unknown | number[];

// 4.6 never类型是unknown的子类型
type type8 = never extends unknown ? true : false;

// 4.7 keyof unknown 等于类型never
type type9 = keyof unknown;

// 4.8 只能对 unknown 进行等或不能操作，不能进行其它操作
value1 === value2;

// 4.9 unknown 类型的值不能访问其属性，也不能作为函数调用，不能作为类创建实例
let value10: unknown;
// value10.age;
// value10()

// 4.10 使用映射类型时，如果遍历的是unknown类型，则不会映射任何属性
type Type1<T> = {
  [P in keyof T]: number;
};
type type11 = Type1<any>;
type type12 = Type1<unknown>;

// 5. 条件类型 像是一个三元操作符， T extends U ? X : Y
// 5.1 基础
type Types2<T> = T extends string ? string : number;
let index: Types2<"a">;
let index1: Types2<123>;

// 5.2 分布式条件类型: 当带检测类型是一个联合类型的时候，该条件类型被称为分布式条件类型
// type TypeName<T> = T extends any ? T : never;
// type Type3 = TypeName<string | number>;
type TypeName<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends () => void
  ? () => void
  : object;

type Type4 = TypeName<() => void>;
type Type5 = TypeName<string[]>;
type Type6 = TypeName<string[] | (() => void)>;

// exclude
type Diff<T, U> = T extends U ? never : T;
type Test2 = Diff<string | number | boolean, undefined | null | number>;

// 提取函数名
type Type7<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  undatePart: (newName: string) => void;
  getProp: (propName: string) => string;
}
type Test1 = Type7<Part>;

// 5.3 条件类型的类型推断//infer
// 如果传递的类型为数组，取数组元素的类型。如果不是数组，返回传入参数的类型
type Type8<T> = T extends any[] ? T[number] : T;
type Test3 = Type8<string[]>;
type Test4 = Type8<string>;

type Type9<T> = T extends Array<infer U> ? U : T;
type Test5 = Type9<string[]>;
type Test6 = Type9<string>;

// 5.4 TS预定义条件类型
// 5.4.1 Exclude
type Type10 = Exclude<"a" | "b" | "c", "a" | "b">;
// 5.4.2 Extract<T, U>
type Type11 = Extract<"a" | "b" | "c", "a" | "b">;
// 5.4.3 NonNullable<T>
type Type12 = NonNullable<string | null | number | undefined>;
// 5.4.4 ReturnType<T>
type Type13 = ReturnType<() => string>;
type Type14 = ReturnType<() => void>;
// 5.4.5 InstanceType<T>
class Aclass {
  constructor() {}
}
type T1 = InstanceType<typeof Aclass>;
type T2 = InstanceType<any>;
type T3 = InstanceType<never>;
// type T4 = InstanceType<string>;
