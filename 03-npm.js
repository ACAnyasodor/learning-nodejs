const lodash = require('lodash')
const arr = [1,[2,[3,[4]]]]
const flatarr = lodash.flattenDeep(arr)
console.log(flatarr)
