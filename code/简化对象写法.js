
let name = "尚硅谷"

let change = function(){
    console.log('我们可以改变你!')
}

const shool = {
    name: name,
    change: change,
    improve: function(){
        console.log('我们可以提高你的技能!')
    }
}

//ES6简化对象写法

const shool1 = {
    name,
    change,
    improve(){
        console.log('我们可以提高你的技能!')
    }
}