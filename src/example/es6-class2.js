/* // 1. ES5中的继承
function Food() {
  this.type = "food";
}
Food.prototype.getType = function () {
  return this.type;
};
function Vegetables(name) {
  this.name = name;
}
Vegetables.prototype = new Food();
const tomato = new Vegetables("tomato");
console.log(tomato.getType());

// 2. ES6中的继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static getClassName(){
      return this.name
  }
}
class Child extends Parent {
  constructor(name, age) {
    // 只有在调用super关键字后才可以使用this关键字
    super(name);
    this.age = age;
  }
}
const child = new Child("nate", 18);
console.log(child);
console.log(child.getName());
// 实例既是子类的实例又是父类的实例
console.log(child instanceof Child);
console.log(child instanceof Parent);
// 父类的静态方法也被子类继承
console.log(Child.getClassName())

// 3. Object.getPrototypeOf
console.log(Object.getPrototypeOf(Child) === Parent)


// 4. super
// 作为函数: 代表父类的构造函数constructor
// 作为对象：在constructor和普通方法中指向的是父类的原型对象，在静态方法中指向的是父类
class Parent {
  constructor() {
    this.type = "parent";
  }
  getName() {
    return this.type;
  }
  static getType() {
    return "is parent";
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log(`constructor: ${super.getName()}`);
  }
  getParentName() {
    console.log(`getParentName: ${super.getName()}`);
  }
  static getParentType() {
    console.log(`getParentType: ${super.getType()}`);
  }
}
const child = new Child();
child.getParentName();
Child.getParentType();
*/

// 5. 类的prototype属性和__proto__属性
// __proto__不是es标准中定义的属性，是大多数浏览器厂商在对es5实现中添加的
var objs = new Object();
console.log(objs.__proto__ === Object.prototype);

// 子类的__proto__指向父类本身
// 子类的prototype.__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// 6. 原生构造函数的继承
// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object
class CustomArray extends Array {
  constructor(...args) {
    super(...args);
  }
}
const customArray = new CustomArray(3);
customArray.fill("+");
console.log(customArray);
console.log(customArray.join("_"));

// es6的类和es5的构造函数实现继承在机制上是存在差异的
// es5是先创建子构造函数的this，然后再将父构造函数的属性和方法添加到这个this上
// es6是先从父类取到实例this，然后在调用super函数之后在将子类的属性和方法添加到这个this上
