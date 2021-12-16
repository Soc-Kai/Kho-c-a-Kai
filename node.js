var _ = require("lodash");
var array = [1];
var orther = _.concat(array, 2, [3, [[4]]]);
console.log(orther);
console.log(array);
var newResult = _.difference([2, 1],[2, 3])
console.log(newResult);