// import { time } from "./b";
// console.log(time);
// setInterval(() => {
//   console.log(time);
// }, 1000);

// import 语句可以理解为引入了一个对象，每个export的内容为对象的属性
// 引入模块类似于对象解构赋值
// 可以通过as起别名
// import { name as nameProp, age } from "./c";
// console.log(nameProp, age);
// 引入的属性是只读的
// nameProp = 'hh'

// 一些全局的设置可以没有任何导出语句，直接引入，里面的代码就会执行
// import "./d"

// import 具有提升效果，在引入前使用也是可以的，但是不建议
// console.log(getName());
// import { getName } from "./e";

// import 是静态语法，不能使用计算值引入
// import { 'get'+ 'Name' } from './e'

// import 重复导入多个，最终会被合并成一个
// import { name } from "./c";
// import { age } from "./c";
// // 相当于执行了一次
// import { name, age } from "./c";

// 可以使用*导入模块中所有内容到一个变量中
import * as info from "./c";
console.log(info);
