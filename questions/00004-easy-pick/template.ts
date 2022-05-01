type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js对比学习
function mypick(todo, keys) {
  let obj = {}
  for (let key of keys) {
    if (todo[key]) {
      obj[key] = todo[key]
    }
  }
  return obj
}

// 1. 返回一个对象
// 2. 遍历keys
//      https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3. todo[key]取值
//      https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 判断key在不在todo里面
//      typeof lookup: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
//      extends类型约束: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
