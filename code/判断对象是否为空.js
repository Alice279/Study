const obj = {};

// in 操作符判断属性是否存在于对象内
// js 访问对象中不存在的属性也不会报错
for (const key in obj) {
    if (key) {
        console.log('true');
    }
}

if (Object.values(obj).length === 0) {
    console.log('false');
}




// 判断引用数据类型
Object.prototype.toString.call()