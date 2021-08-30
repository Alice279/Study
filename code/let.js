//遍历并绑定事件
for(var i = 0; i < items.length; i++) {
    items[i].onclick = function(){
        this.style.background = 'pink'
        //items[i].style.background = 'pink'
        //这句会报错，i是一个全局变量，onclick的函数是回调函数，
        //先执行for循环，点击时才执行回调函数，那时候i已经是items.length了
    }
}
//一个其他方法，就是把声明i的var换成let