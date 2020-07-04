// 1. 基本用法
interface NameInfo {
  firstName: string;
  lastName: string;
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName}  ${lastName}`;
};
console.log(
  getFullName({
    firstName: "nate",
    lastName: "xu",
  })
);

// 2. 可选属性
interface Vegetable {
  color?: string;
  readonly type: string;
}
const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? color + "" : ""}  ${type}}`;
};
console.log(getVegetables({ type: "tomato" }));

// 3. 多余属性检查
// getVegetables({ type: "tomato", color: "gray", size: 2 });

// 4. 绕开多余属性检查
// -、使用类型转换
getVegetables({ type: "tomato", color: "gray", size: 2 } as Vegetable);
// 二、利用索引签名 [prop: string]: any
// interface Vegetable {
//     color?: string;
//     type: string;
//     [prop: string]: any
//   }
// getVegetables({ type: "tomato", color: "gray", size: 2 })
// 三、利用类型兼容性
const vegetableInfo = { type: "tomato", color: "gray", size: 2 };
getVegetables(vegetableInfo);

// 5. 只读属性
let vegetableObj: Vegetable = {
  type: "tomato",
};
// vegetableObj.type = 'carrot';

interface ArrInter {
  0: number;
  readonly 1: string;
}
let arr11: ArrInter = [1, "a"];
// arr11[1] = 'b';

// 6. 函数类型
interface AddFunc {
  (num1: number, num2: number): number;
}
const add: AddFunc = (n1, n2) => {
  return n1 + n2;
  // return `${n1} ${n2}`
};
// 7. 索引类型
interface RoleDic {
  [id: number]: string;
}
const role1: RoleDic = {
  1: "a",
  2: "b",
};

// 8. 继承接口
interface Vegetables {
  color: string;
}
interface Tomato extends Vegetables {
  radius: number;
}
interface Carror extends Vegetables {
  length: number;
}
let tomato: Tomato = {
  radius: 1,
  color: "red",
};
let carrot: Carror = {
  length: 1,
  color: "orange",
};
// 9. 混合类型接口
interface Counter {
  (): void;
  count: number;
}
const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};
const counter: Counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
