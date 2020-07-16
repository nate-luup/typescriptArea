// 命名空间在1.5之前叫内部模块，在1.5之前es6模块还没有正式成为标准，
// 所以ts实现是将模块分为内部模块和外部模块：
// 内部模块使用module关键字来定义，外部模块使用export来指定哪些内容对外部可见。
// 从1.5开始使用命名空间代替内部模块，使用namespace关键字

// 命名空间和模块的区别：大多数情况下使用模块
// 命名空间：当在程序内部用于防止全局污染的时候，想把相关的内容都放在一起的时候，我们建议使用命名空间
// 模块：当我们封装了一个库或者工具，适用于模块系统引入的时候，我们建议使用模块

// 命名空间的定义： 相当于定义了一个大的对象，里面可以定义变量，接口，类，方法等等，
// 但是不使用export关键字指定哪些内容对外访问的话，外部是访问不到的

/* namespace Validation {
  const isLetterReg = /^[a-zA-Z]+$/;
  export const isNumberReg = /^[0-9]+$/;
  export const checkLetter = (text: any) => {
    return isLetterReg.test(text);
  };
}

namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons;
let triangle = new polygons.Triangle();
 */
