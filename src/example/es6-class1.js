// 1. ES5和ES6实现创建实例
// es5
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.getPosition = function () {
//   return "(" + this.x + ", " + this.y + ")";
// };
// var p1 = new Point(2, 3)
// console.log(p1)
// console.log(p1.getPosition())
// var p2 = new Point(4, 5);
// console.log(p2.getPosition())

// es6
// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     getPosition(){
//         return `(${this.x}, ${this.y})`
//     }
// }
// var p1 = new Point(2, 3)
// console.log(p1)
// console.log(p1.getPosition())
// var p2 = new Point(4, 5);
// console.log(p2.getPosition())

// 2. constructor方法
// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//         return {a: 1}
//     }
//     getPosition(){
//         return `(${this.x}, ${this.y})`
//     }
// }
// var p1 = new Point(2, 3);
// console.log(p1 instanceof Point)

// 3. 类的实例
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   getPosition() {
//     return `(${this.x}, ${this.y})`;
//   }
// }
// var p1 = new Point(2, 3);
// console.log(p1.hasOwnProperty("x"));
// console.log(p1.hasOwnProperty("getPosition"));
// console.log(p1.__proto__.hasOwnProperty("getPosition"));

// 4. 取值函数和存值函数
// var info = {
//   _age: 18,
//   set age(newValue) {
//     if (newValue > 18) {
//       console.log("怎么变老了");
//     } else {
//       console.log("哈哈我还年轻");
//     }
//   },
//   get age() {
//     console.log("你问我年龄干嘛");
//     return this._age;
//   },
// };
// console.log(info.age);
// info.age = 17;

// class Info {
//   constructor(age) {
//     this._age = age;
//   }
//   set age(newAge) {
//     this._age = newAge;
//     console.log(`new age is ${newAge}`);
//   }
//   get age() {
//     return this._age;
//   }
// }
// const infos = new Info(18);
// console.log(infos.age)
// infos.age = 17

// 5. class表达式
// 函数两种表达式
// const func = function(){}
// function func(){}

// class 也有两种定义形式
// class Infos {
//   constructor() {}
// }
// const Infos = class c {
//   constructor() {}
// };

// 6. 静态方法
// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     getPosition(){
//         return `(${this.x}, ${this.y})`
//     }
//     static getClassName(){
//         return Point.name
//     }
// }
// console.log(Point.getClassName())

// 7. 实例属性其它写法
// class Point{
//     z=0
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     getPosition(){
//         return `(${this.x}, ${this.y})`
//     }
//     static getClassName(){
//         return Point.name
//     }
// }

// 8. 实现私有方法
// 一：将私有方法移出模块
// const _func2 = () => {};
// class Point {
//   func1() {
//     _func2.call(this);
//   }
// }
// const p = new Point();
// p._func2()

// 二：利用Symbol
// const funcName = Symbol();
// class Point {
//   [funcName]() {}
// }
// const p = new Point();
// console.log(p);

// 9. new.target
// 函数中的new.target
// function Point() {
//   console.log(new.target);
// }
// const p = new Point();

// 类中的new.target
// class Point {
//     constructor(){
//         console.log(new.target)
//     }
// }
// const p = new Point();

// 子类的new.target 指向子类的构造函数，利用这个特性我们可以定义一个类，这个类不能直接创建实例，只能通过一个继承他的子类进行实例化
class Parent {
  constructor() {
      if(new.target === Parent){
          throw new Error('不能实例化')
      }
    console.log(new.target);
  }
}
class Child extends Parent {
  constructor() {
    super();
  }
}
const child = new Child();
const parent = new Parent();
