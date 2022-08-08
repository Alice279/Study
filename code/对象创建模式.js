//构造函数模式
var p = new Object()
p.name = 'Tom'
p.age = 12
p.setName = function (name) {
    this.name = name
}


//对象字面量模式
var p = {
    name: 'Tom',
    age: 12,
    setName: function (name) {
        this.name = name
    }
}


//工厂模式
function creatPerson(name, age) {
    var obj = {
        name: name,
        age: age,
        setName: function (name) {
            this.name = name
        }
    }
    return obj
}
var p1 = creatPerson('Tom', 12)
var p2 = creatPerson('Bob', 13)


//自定义构造函数模式
function Person(name, age) {
    this.name = name
    this.age = age
    this.setName = function (name) {
        this.name = name
    }
}
var p1 = new Person('Tom', 12)

// 类数组对象 arguments
// 将类数组对象转化为数组
// 
const nums = Array.prototype.slice.call(arguments)
//
const nums1 = [];
for (let i = 0; i < arguments.lengthl; i++) {
    nums1.push(arguments[i])
}
// 因为人家是类数组对象，有数组的一些属性，可以遍历，有length属性


Object.prototype.toString.call()    [object, Object]
// 第一个 object 表示类型；第二个 Object 表示是由哪个构造函数构造出来的