var arr = [
    ['h', 'e', 'l', 'l', 'o'],
    ['m', 'y'],
    ['w', 'o', 'r', 'l', 'd'],
    ['!']
];

//二维数组降维 concat 方法
var result = []
for (var i = 0; i < arr.length; i++) {
    result = result.concat(arr[i])
}

//二维数组降维 concat+apply 方法
var result = Array.prototype.concat.apply([], arr)

//多维数组降维
Array.prototype.deepFlatten = function() {
    var result = []
    this.forEach(function(val, idx) {
        if (Array.isArray(val)) {
            val.forEach(arguments.callee)
        }
        else {
            result.push(val)
        }
    })
    return result
}
