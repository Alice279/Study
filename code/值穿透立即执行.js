var promise = new Promise((resolve, reject) => {
    console.log(1)
})
promise.then(console.log(2))
console.log(3)
// 值穿透，then 里得到的不是一个函数时，不用等 promise 状态，直接执行

Promise.resolve(4)
  .then(5)
  .then(Promise.resolve(6))
  .then(console.log)