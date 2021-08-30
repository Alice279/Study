//创建Symbol
let s = Symbol()
let s1 = Symbol('123')
let s2 = Symbol('123')
console.log(s1 === s2) // false
//Symbol.for 创建
let s3 = Symbol.for('456')
let s4 = Symbol.for('456')
console.log(s3 === s4) //true

//利用Symbol向对象中添加方法
let game = {}

let method = {
    up: Symbol(),
    down: Symbol()
}

game[method.up] = function(){
    //函数体
}
game[method.down] = function(){
    //函数体
}

//利用Symbol向对象中添加方法
let youxi = {
    name:'狼人杀',
    [Symbol()]: function(){
        //函数体
    },
    [Symbol('say')]: function(){
        //函数体
    }
}
