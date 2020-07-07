// 1. 数字枚举
/* function getSuccess(){
    return 3;
}
enum Status {
  Uploading= 5,
  Success = getSuccess(),
  Failed = 1,
}
console.log(Status.Success); */

// 2. 反向映射： 通过枚举值获取枚举属性名
// https://www.typescriptlang.org/play/index.html

// 3. 字符串枚举, 要求每个字段的值都是字符串字面量，或者该字符串枚举中另一个枚举成员
enum Message {
  Error = "sorry, error",
  Success = "Hoho, Success",
  Failed = Error,
}

// 4. 异构枚举: 既包含数字，又包含字符串，非特殊情况下不建议使用
enum Result {
  Failed = 0,
  Success = "success",
}

// 6. 枚举成员类型和联合枚举类型
// 当一个枚举值满足一定的条件时，这个枚举可以作为类型来使用
// (1) enum E { A } 不带初始值的枚举成员
// (2) enum E { A = 'a' } 值为字符串字面量
// (3) enum E { A = 1 } 值为数值字面量

// 枚举成员类型
enum Animails {
  Dog = 1,
  Cat = 2,
}
interface Dog {
  type: Animails.Dog;
}
const dog: Dog = {
  type: 1,
};
// 联合类型
enum Status {
  Off,
  On,
}
interface Light {
  status: Status;
}
const light: Light = {
  status: Status.On,
};

// 7. 运行时的枚举
// 可以在运行时使用枚举

// 8. const enum: 定义枚举前面加上 const
// 如果枚举只做对比使用

const enum Animals1 {
    Dog = 1,
    Cat = 2
  }
  const dog1 = Animals1.Dog
  const cat1 = Animals1.Cat

// const dog1 = 1 /* Dog */;
// const cat1 = 2 /* Cat */;
