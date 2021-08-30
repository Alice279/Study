
//扩展运算符将数组转换为逗号分隔的参数序列

const tfboys = ['1', '2', '3']

function chunwan (){
    console.log(arguments)
}

chunwan(tfboys) 
//输出是一个对象，对象里有个数组，数组里3个值

chunwan(...tfboys)
//输出是三个字符串，等同于
chunwan('1', '2', '3')

//扩展的应用

//1.数组合并
const arr1 = ['123', '456']
const arr2 = ['789', '246']
//const arr = arr1.concat(arr2)
const arr = [...arr1, ...arr2]

//数组的克隆
const x1 = ['1', '2', '3']
const x2 = [...x1]

//将伪数组转换为真正的数组
const divs = document.querySelectorAll('div')
const divArr = [...divs]