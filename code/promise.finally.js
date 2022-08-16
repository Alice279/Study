
// // https://juejin.cn/post/6844904077537574919

// const promise = new Promise(function (resolve, reject) {
//     resolve('ok');
//     setTimeout(function () { throw new Error('test') }, 0)
// });
// promise.then(function (value) { console.log(value) });
// // ok
// // Uncaught Error: test

// // promise 内部抛出的错误，不处理的话会被它自己消化掉，不会影响到外面的代码
// // 上面的代码，因为将错误抛出放在了下一轮事件循环，是在 promise 外部抛出的，不会被消化
// // 就是说，判断是在 promise 内 还是 外 的 不是看它代码的位置，而是看它啥时候执行捏


// Promise.prototype.finally();
// // finally 指定的回调函数不接受任何参数
// // 没办法知道前面的是 resolved 还是 rejected ，反正不管是哪个它都会执行
// // finally 里的回调 应该是和状态无关的

// // resolve 的值是 undefined
// Promise.resolve(2).then(() => {}, () => {})

// // resolve 的值是 2
// Promise.resolve(2).finally(() => {})

// finally 方法总是返回原来的值


// finally()方法不管Promise对象最后的状态如何都会执行
// finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。

// 请仔细观察下面 3 段代码，及其输出 的不同，后面的数字是输出顺序
// then 接收到 非 promise 值时，后面的 finally 紧跟着执行，算作当前一个循环
// then 接收到 promise 值时，不管它返回的是不是 promise，后面的 finally 都算作下一个循环

// 1.
// Promise.resolve('1')
//   .then(res => {     // 1
//     console.log(res)
//     return Promise.resolve(22)
//   })
//   .then(res => {    // 3
//     console.log(res)
//   })
//   .finally(() => {  // 5
//     console.log('finally')
//   })

// console.log('123');

// Promise.resolve('2')
//   .finally(() => {    // 2
//     console.log('finally2')
//   	return '我是finally2返回的值'
//   })
//   .then(res => {    // 4
//     console.log('finally2后面的then函数', res)
// })

//2.
Promise.resolve('1')
  .then(res => {    // 1
    console.log(res)
    return Promise.resolve(22)
    // return 22
  })
  .then(res => {     // 3
    console.log(res)
    return 33
  })
  .then(res => {
    console.log(res);
    return 44;
  })
  .finally(() => {   // 4
    console.log('finally')
  })
Promise.resolve('2')
  // .finally(() => {    // 2
  //   console.log('finally2')
  // 	return '我是finally2返回的值'
  // })
  .then(res => {      // 5
    console.log('finally2后面的then函数', res)
  })
  .then(res => {      // 5
    console.log('finally2后面的then函数11', res)
  })

// //3.
// Promise.resolve('1')
//   .then(res => {      // 1
//     console.log(res)
//   })
//   .finally(() => {    // 3
//     console.log('finally')
//   })
// Promise.resolve('2')
//   .finally(() => {    // 2
//     console.log('finally2')
//   	return '我是finally2返回的值'
//   })
//   .then(res => {      // 4
//     console.log('finally2后面的then函数', res)
// })


// 非常奇怪，finally 写在 then 前面的时候 非常奇怪

// finally  还有返回的结果是 Promise.resolve() 时，就后面的 then 就会等人家先执行完
// 正常情况下 没有 finally 没有 return Promise.resolve() 时，就是你一个我一个