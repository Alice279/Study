# 嵌套路由

1.注册子路由时要写上父路由的path值

2.路由的匹配是按照注册路由的顺序完成的

# 向路由组件传递参数

1.params参数

路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>

注册路由（声明接收）：<Route path='/demo/test/:name/:age' component={Test}>

接收参数：const {id, title} = this.props.match.params

2.search参数

路由链接（携带参数）：<Link to='/demo/test?name=tom&age=18'>详情</Link>

注册路由（无需声明）：<Route path='/demo/test' component={Test}>

接收参数：const {search} = this.props.location

备注：获取到的search是urlencoded编码字符串，需要借助querydtring解析

3.state参数

路由链接（携带参数）：<Link to={{path:'/demo/test',state={name:'tom', age:18}}}>详情</Link>

注册路由（无需声明）：<Route path='/demo/test' component={Test}>

接收参数：const {id, title} = this.props.location.state

备注：刷新也可以保留住参数

# 路由的replace模式和push模式

push模式就是点击之后浏览过的页面就压入栈中，可回退

replace模式是点击的新的页面替换当前页面，不可回退

默认为push模式，设置replace={true}或者直接使用关键字replace就可以开启replace模式

# 编程式路由导航

借助this.props.history对象上的API对操作路由跳转、前进、后退

-this.props.history.push()

-this.props.history.replace()

-this.props.history.goBack()

-this.props.history.goForward()

-this.props.history.go()

# withRouter的使用

react-router-dom库里的一个函数，用来加工一般组件

返回一个拥有路由组件特有的props属性的新组件

# BrowserRouter和HashRouter的区别

1.底层原理不一样

BrowserRouter使用的是H5的history API，不兼容IE9及以下版本

HashRouter使用的是URL的哈希值

2.path表现形式不一样

BrowserRouter路径中没有#

HashRouter路径中包含#，且#之后内容默认为前台资源不会发送给服务器

3.刷新后对路由state的影响

BrowserRouter没有任何影响，因为state保存在history对象中

HashRouter刷新后会导致路由state参数的丢失

4.备注：HashRouter可以用于解决一些路径错误相关的问题