1.拆分组件、实现静态组件，注意className style的写法

2.动态初始化列表，如何确定将数据放在哪个组件的state中？

——某个组件使用：放在其自身的state中

——某些组件使用：放在他们共同的父组件state中（状态提升）

3.关于父子之间通信:

——父给子传递数据：通过props

——子给父传递数据：通过props传递，父给子一个函数，子调用函数来传给父

4.注意defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 value

5.状态在哪里，操作状态的方法就在哪里

6.箭头函数快捷键：a + n + taban