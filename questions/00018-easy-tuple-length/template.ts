type Length<T extends readonly any[]> = T['length']
function getLength(obj) {
  if (Array.isArray(obj)) {
    return obj.length
  } else {
    throw new Error('not array')
  }
}
// 知识点
// 1. 什么是Tuple类型？
//   https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// 2. Tuple 类型和普通数组有什么区别?

type tupleTest = [string, number]
type tupleTestLen = tupleTest['length']
let tupleTestIns1: tupleTest = ['a', 1]

type arrayTest = number[]
type arrayTestLen = arrayTest['length']
let arrayTestIns1: arrayTest = [4, 5, 6]
