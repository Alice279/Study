# SPA

单页面应用，整个应用只有一个完整的页面，我们做的一般是单页面多组件应用

点击页面中的链接不会刷新页面，只会做页面的局部更新

数据都需要通过ajax获取，并在前端异步展示

# 路由

一个路由就是一个映射 key -- value

key 是 路径 ； value 是 function / component

# 后端路由

1.理解：value是function，用来处理客户提交的请求

2.注册路由：router.get(path, function(req, res))

3.工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由

调用路由中的函数来处理请求，返回响应数据

# 前端路由

1.浏览器端路由，value是component，用于展示页面内容

2.注册路由：<Route path="/test" component={Test}>

3.工作过程：当浏览器的path变为/test时，当前路由组件就会变为Test组件

# 前端路由工作原理

依靠BOM身上的history history对象的 push replace forword back listen 等方法

可以实现更改浏览器路径，页面监听浏览器路径的改变等等

工作过程：

1.点击导航栏里的导航链接引起路径变化

2.变化被路由器检测到后匹配组件并展示

# react-router-dom的理解

react-router是react的插件库，又分为给web用的，给native用的和通用的三个子划分

react-router-dom是react的一个插件库，专门用来实现一个SPA应用

# 路由的基本使用

1.明确好界面中的导航区、展示区

2.导航区的a标签改为Link标签，a标签负责链接页面，Link标签负责链接组件

其实<Link>标签在底层还是会被转化成<a>标签来实现跳转，不过又自动写了写跳转函数

<Link to='/xxx'>Demo</Link>

3.展示区写Route标签进行路径的匹配

<Route path='/xxx' component={Demo}>

4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

# 路由组件与一般组件

1.写法不同

一般组件：<Demo />

路由组件：<Route path='/xxx' component={Demo}>

2.存放位置不同

一般组件：components

路由组件：pages

3.接收到的props

一般组件：写组件标签时传递了什么，就能收到什么

路由组件：接收到三个固定属性  history location match

history