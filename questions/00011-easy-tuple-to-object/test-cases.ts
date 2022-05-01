import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type r = typeof tuple

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// const let js 世界
// type interface 类型世界
// 1. typeof:  js 世界 -> ts世界
// 2. as const 字面量类型
let str = '123'
type s = typeof str
str = '456'

const cstr = '456'
type c = typeof cstr
// c = '789'
