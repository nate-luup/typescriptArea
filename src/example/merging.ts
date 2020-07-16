// 1. 接口合并：接口中的函数成员，声明合并后变成了函数重载
interface InfoInter {
  name: string;
  getRes(input: string): number;
}
interface InfoInter {
  age: number;
  getRes(input: number): string;
}
let infoInter: InfoInter = {
  name: "nate",
  age: 18,
  getRes(text: any): any {
    if (typeof text === "string") {
      return text.length;
    } else {
      return String(text);
    }
  },
};

// 2. 命名空间合并
/*
namespace Validation {
  export const isLetterReg = /^[a-zA-Z]+$/;
  export const checkLetter = (text: any) => {
    return isLetterReg.test(text);
  };
}

namespace Validation {
  export const isNumberReg = /^[0-9]+$/;
  export const checkNumber = (text: any) => {
    return isNumberReg.test(text);
  };
}
 */

// 3. 不同类型合并，命名空间可以和类、函数、枚举进行合并
// 3.1 命名空间和类的合并：同名的类必须在同名的命名空间前面，合并之后的效果包括以命名空间导出的属性作为静态属性的类
/* class Validations {
  constructor() {}
  checkType() {}
}
namespace Validations {
  export const isNumberReg = /^[0-9]+$/;
  export const checkNumber = (text: any) => {
    return isNumberReg.test(text);
  };
}
console.dir(Validations) */

// 3.2 命名空间和函数的合并：同名的函数必须在同名的命名空间前面，合并之后的效果函数上包含命名空间导出的属性
/* function countUp() {
  countUp.count++;
}
namespace countUp {
  export let count = 0;
}
console.log(countUp.count);
countUp();
console.log(countUp.count); */

// 3.3 命名空间和枚举的合并：可以为枚举拓展内容，顺序没有要求

enum Colors {
  red,
  green,
  blue,
}
namespace Colors {
  export const yellow = 3;
}
console.log(Colors);
