Array.prototype.flat = function() {
    return [].cancat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])))
}
Array.prototype.unique = function() {
    return [...new Set(this)]
}
const sort = () => a - b

console.log(arr.flat().unique().sort())


///////
var arr = [[1,2,3], [4,5,6], [7,8,[9,8,6]]]

function flatten (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
Array.from(new Set())