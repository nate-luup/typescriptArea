// ES6的模块 export

// export const name = "nate";
// export const age = 18;
// export const address = "beijing";

const name = "nate";
const age = 18;
const address = "beijing";

export { name, age, address };
export function func() {}
export class A {}

function func1() {}
class B {}
const b = "";
export { func1 as Function1, B as ClassB, b as StringB, b as String };

// 导出的是对外接口而不是一个具体的值
// export 'nate';
// const name = "nate"
// export name;

// export 导出的接口的值是动态绑定的
// export 不能出现在块级作用域中

// 我们可以使用export default导出一个默认的内容，一个模块中只能有一个export default
// 默认导出的内容，在其他文件中导入的时候直接使用一个变量接收就可以了，名字可以自定义
// export default本质上就是输入一个default的变量或方法

// export default classA;

// import 和 export的复合写法
// export { getName } from './e'

// export default 可以直接接字面量
// export default 123;

// 同时导入default变量和其它export变量
import age, { getName } from "./e";
console.log(age);
console.log(getName());
