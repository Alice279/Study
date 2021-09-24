# SPA

单页面应用，整个应用只有一个完整的页面

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