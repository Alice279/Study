
## promise 的状态

promise 状态 是 promise 实例对象中的一个属性 promiseState

* pending  未决定的

* resolved / fullfilled  成功

* rejected  失败

* 状态只能由 pending 变为 resolved / rejected 只能改变一次


## promise 对象的值

实例对象中的另一个属性 promiseResult

保存着异步任务 成功 / 失败 的结果

* resolve reject 可以修改这个值


## promise 工作流程

* 先 new Promise 出一个 promise 对象

* 在 promise 内部封装异步操作，这里的异步操作是同步调用的

* 异步操作成功/失败则将 promise 对象状态改变并调用 then 方法里对应的回调函数

