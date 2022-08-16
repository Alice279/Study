new Promise((resolve, reject) => {
    resolve(console.log('123'));
    console.log('456');
}).then(value => {
    console.log(value);
    value();
})
// resolve 也是同步执行的
// resolve 中如果是函数，就是先执行这个函数，把函数的返回结果传递给 then
// 一般来说，resolve 或者 reject 之后 Promise 的使命就完成了，后面不会有语句
// 如果想让后面的语句不执行，在 resolve  前面加上 return

// 其实 这个例子中 value() 是会报错的，因为 value 根本不是函数
// 但是 执行的退出码还是 0 ，因为 ：
// 如果没有指定错误处理的回调函数，则 Promise 对象抛出的错误不会传到外层
// 进程也不会终止

// 以上是 Promise 的缺点之一，还有两个
// 一旦开始就无法取消；在 pendding 状态不知道进行到哪一步了

// 一般总是建议，Promise 对象后面总是要跟 catch() 方法
// 这样可以处理 Promise 内部发生的错误



// Promise.all([])
// 如果数组里的 Promise 全部 resolved 则 resolved 
// 如果有一个 rejected 则rejected
// 但是如果数组里的 Promise 的 rejected 它自己用 catch 处理了
// catch 返回的也是一个 Promise ，则这个元素的最终结果其实是 resolved


// Promise.allSettled() 状态只可能变为 resolved
// 它的回调函数接收到的参数是一个数组，数组元素是对象
// 对象的格式都是一样的哦  
// {status: 'fulfilled', value: value}  {status: 'rejected', reason: reason}

const promises = [fetch('index.html'), fetch('https://does-not-exist/')];
const results = await Promise.allSettled(promises);

// 过滤出成功的请求
const successfulPromises = results.filter(p => p.status === 'fulfilled');

// 过滤出失败的请求，并输出原因
const errors = results
    .filter(p => p.status === 'rejected')
    .map(p => p.reason);


// Promise.resolve() 将现有对象转化为 Promise 对象
// 参数的四种情况：
// 1. 参数是一个 Promise 实例，直接返回
// 2. 参数是一个 thenable 对象，将该对象转化为 promise 对象并立即执行 then 方法
// 3. 参数是没有 then 方法的对象，或者不是对象，返回一个 resolved 状态的 promise 对象
// 4. 没有参数，返回一个 resolved 状态的 promise 对象