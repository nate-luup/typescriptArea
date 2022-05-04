type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// js实现
function concat(arr1, arr2) {
  let res = [...arr1, ...arr2]

  return res
}
