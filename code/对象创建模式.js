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