//快速排序
var quickSort = function(arr) {
    if (arr.length <= 1) {return arr}
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    console.log(arr);
    console.log(pivot);
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

const arr = [2,3,7,1,8,4];
const result = quickSort(arr);
console.log(result);