import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [
  infer K,
  ...infer P
]
  ? Equal<K, U> extends true
    ? true
    : Includes<P, U>
  : false

function include(list, key) {
  let [first, ...rest] = list
  if (list.length === 0) {
    return false
  }
  if (first === key) {
    return true
  } else {
    include(rest, key)
  }
}

// 知识点
// 1. 用递归实现遍历数组
// 2. ts的模块规范
//  - 如果有import/export的话就是模块
//  - 没有的话就是全局的，可以直接在别的模块引用
