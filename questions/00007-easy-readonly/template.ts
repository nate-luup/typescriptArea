type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// js
function readonly(obj) {
  const result = {}
  for (let key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}

// 1. 返回一个对象
// 2. 遍历 obj in--> mapped keyof lookup
// 3. 加上readonly 关键字
// 4. 通过key 来取obj里面的值 indexed
