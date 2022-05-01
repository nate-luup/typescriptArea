type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

//js

function tupleToObject(array) {
  let result = {}
  array.array.forEach((element) => {
    result[element] = element
  })
  return result
}
