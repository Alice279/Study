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
