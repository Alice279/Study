//ES5
function Phone(brand, price) {
    this.brand = brand
    this.price = price
}
Phone.prototype.call = function(){
    console.log('I can call others')
}
let one = new Phone('huawei', 1999)


class Shouji {
    //构造方法，在new的时候自动执行
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    //创建方法必须使用该语法
    call(){
        console.log('I can call others')
    }
}
let onePlus = new Shouji('xiaomi', 1999)