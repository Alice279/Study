
# react 

用于构建用户界面，将数据渲染为HTML视图的开源js库

# 为什么使用react

原生js操作DOM繁琐，效率低，且会进行大量重绘重排

原生js没有组件化编码方案，代码复用率低

react 组件化模式，声明式编码

React Native 中可以使用react语法进行移动端开发 安卓 ios

使用虚拟DOM + Diffing算法，尽量减少与真实DOM的交互

# jsx

react里使用的不是js，是jsx，浏览器只认js，

babel可以将jsx转换为js，将es6转换为es5

jsx其实就是js创建虚拟DOM的语法糖

# 虚拟DOM

1.本质是Object类型的对象，一般对象

2.它和真实DOM的区别:虚拟DOM比较“轻”

因为虚拟DOM是react内部用，无需真实DOM那么多属性

3.虚拟DOM最终被react转化为真实DOM，呈现在页面上

# jsx语法规则

jsx = js + xml

xml 早期用于存储和传输数据，现在一般使用JSON