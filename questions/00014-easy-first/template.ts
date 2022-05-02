// 方法一
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 方法二
// type First<T extends any[]> = T extends [] ? never : T[0]
// 方法三
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 方法四
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never

// function first(arr) {
//   // 判断arr是不是空数组，如果是的话返回never
//   return arr[0]
// }
// const first = (arr) => {
//   const [f, ...rest] = arr
//   return f ? f : 'never'
// }

type Tail<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest
  : never
