
//常见的类数组对象有  arguments, DOM 操作返回的结果

//方法一：
Array.from(document.querySelectorAll('div'));

//方法二：
Array.prototype.slice.call(arguments)

//方法三：
Array.prototype.concat.apply([], document.querySelectorAll('div'))

//方法四：
const res = [...arguments]