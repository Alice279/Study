//当我们要对数组进行处理，并最终返回一个值
//考虑使用 reduce



//关于数字转化为字符串

var number = 1243
number = number + ''
// number = '1243'

//但是对前面是多个0的不管用
var number = 00000000000001
number = number + ''
// number = '01'