## async

* 1.如果返回一个非promise对象，则直接返回值

* 2.如果返回的是一个promise对象，则为对象的resolve / reject

* 3.如果抛出一个错误，返回reject的promise对象

* 和 then 的规则一模一样


## await

* 1.await 右侧表达式一般为 promise 对象，但也可以是其他值

* 2.如果表达式是 promise 对象，await 返回但是 promise 成功的值

* 3.如果表达式是其他值，直接将此值作为 await 的返回值

* await 必须写在 async 函数中，但是 async 函数中可以没有 await

* 如果 await 中的 promise 失败了，会抛出异常，需要通过 try...catch 处理