type MyExclude<T, U> = T extends U ? never : T

//js
function myExclude(source: any[], excludes: any[]) {
  return source.filter((s) => !excludes.includes(s))
}
