import arrayMap = require("test-array-map-nate");
const resultArray = arrayMap([1, 2], (item) => {
  return item + 2;
});
console.log(resultArray)
resultArray.forEach(item=>{
    // console.log(item.length)
    item.toFixed()
})
