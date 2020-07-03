const s1 = Symbol();
console.log(s1);

const s2 = Symbol("nate");
console.log(s2);

// Symbol 不可以和其他类型做运算的
// s2 + 1
// s2 + ''

// Symbol 可以转换成字符串和boolean类型
console.log(s2.toString());
console.log(Boolean(s2));
console.log(!s2);

// Symbol作为属性名
let prop = "name";
const info = {
  // name: 'nate'
  [prop]: "nate",
};
// console.log(info);

const s3 = Symbol("name");
const info2 = {
  [s3]: "nate-s3",
  age: 18,
  sex: "nan",
};
// console.log(info2);
// 获取属性值
console.log(info2[s3]);

// 属性名的遍历:
// 1. for in 是遍历不到Symbol属性名的
console.log("-----开始for in 循环--------");
for (const key in info2) {
  console.log(key);
}
// 2. Object.keys 方法是获取不到Symbol属性名的
console.log(Object.keys(info2));

// 3. Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(info2));

// 4. JSON.stringify 会忽略 Symbol 属性名
console.log(JSON.stringify(info2));

// 5. 通过Object.getOwnPropertySymbols获取所有Symbols属性
console.log(Object.getOwnPropertySymbols(info2));

// 6. Reflect.ownKeys 会返回所有的属性名
console.log(Reflect.ownKeys(info2));

// Symbol 两个静态方法:
// 1. Symbol.for(): 首先在全局范围（window、iframe、serviceworker）去找有没有使用传入的字符串创建的symbol值，如果有直接返回，没有则会创建一个新的
// 2. Symbol.keyFor(): 参数是Symbol.for()返回的Symbol： 返回值是创建Symbol时的字符串标识

const s4 = Symbol.for("nate-1");
const s5 = Symbol.for("nate-1");
// console.log(s4===s5)

console.log(Symbol.keyFor(s5));

// ES6 11个内置的Symbol值

// 1. Symbol.hasInstance
// 当给一个对象设置属性名为Symbol.hasInstance的方法后，
// 其他对象使用instanceof关键字来判断是否是该对象的实例的时候会调用到该方法
const obj1 = {
  [Symbol.hasInstance](otherObj) {
    console.log(otherObj);
    // return true
  },
};
console.log({ a: "a" } instanceof <any>obj1);

// 2. Symbol.isConcatSpreadable
// 是一个可读写的boolean值，当一个数组的Symbol.isConcatSpreadable设置为false的时候，就不会被扁平化处理
let arr1 = [1, 2];
console.log([].concat(arr1, [3, 4]));
// 设置为true和不设置是一样的，默认值为undefined
console.log(arr1[Symbol.isConcatSpreadable]);
arr1[Symbol.isConcatSpreadable] = false;
console.log([].concat(arr1, [3, 4]));

// 3. Symbol.species
// 指定创建衍生对象的构造函数
class C extends Array {
  constructor(...args) {
    super(...args);
  }
  static get [Symbol.species]() {
    return Array;
  }
  getName() {
    return "nate";
  }
}
const c = new C(1, 2, 3);
const a = c.map((item) => {
  return item + 1;
});
console.log(a instanceof C);
console.log(a instanceof Array);

// 4. Symbol.match
// 当在一个字符串上调用match方法时候会调用这个内部方法
let obj3 = {
  [Symbol.match](string) {
    console.log(string.length);
  },
};
console.log("abcde".match(<RegExp>obj3));
// 5. Symbol.replace
// 6. Symbol.search
// 7. Symbol.split
// 8. Symbol.iterator
const arr5 = [1, 2, 3];
const iterator = arr5[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 9. Symbol.toPrimitive
let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    console.log(type);
  },
};
// const res = (obj4 as number) ++;
// 和js有区别，打印default， js打印string
const res = `abc${obj4}`;

// 10. Symbol.toStringTag
let obj5 = {
  // [Symbol.toStringTag]: 'nate'
  get [Symbol.toStringTag]() {
    console.log(1);
    return "nate";
  },
};
console.log(obj5.toString());
// 11. Symbol.unscopables和with命令有关，过滤掉某些属性
const obj6 = {
  a: "a",
  b: "b",
};
// with (obj6) {
//   console.log(a);
//   console.log(b);
// }
