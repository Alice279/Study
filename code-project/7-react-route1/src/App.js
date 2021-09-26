import React, {Component} from 'react'
//import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Link, NavLink, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'

export default class App extends Component {

  render(){
    return (
      <div>
        <h2>React Router Demo</h2>

        <Header />
        
        {/** <BrowserRouter>*/}

        {/**编写路由链接 */}
          <Link className="xxx" to="/about">About</Link>
          <NavLink activeClassName="xxx" to="/home">Home</NavLink>
          <MyNavLink exact={true} to='/about'>MyNavLinkAbout</MyNavLink>
          <MyNavLink exact to='/home'>MyNavLinkHome</MyNavLink>
          {/** <NavLink>标签比<Link>标签多了一个activeClassName属性 选中导航栏时的类名*/}
          {/** 如果写若干个<NavLink>标签，比如activeClassName属性就是相同的，要重复好多遍
           *   所以我们可以封装一下库里的标签变为自定义组件
           *   标签体里的内容也会被收集到传递过去
           */}
          {/** exact用于开启严格匹配 */}

        {/**注册路由 */}
        
          <Route path='/about' component={About}/>
          <Route path='/home' component={Home}/>
          <Redirect to="/about"/>
          {/** <Redirect>是重定向标签 */}

        {/** </BrowserRouter>*/}
      </div>
    )
  }
}
//原生js中靠<a>标签跳转不同的页面
//react中靠路由链接实现组件切换

//Router分为BrowserRouter和HashRouter
//HashRouter路径里面带#，#后面的资源默认是hi前台资源，不会发送给服务器

//BrowserRouter一个路由器需要包裹所有的组件
//所以我们可以直接把整个App包裹起来
//不在当前页面引入BrowserRouter

//<NavLink>标签比<Link>标签多了一个activeClassName属性 选中导航栏时的类名

//可以通过封装库里组件来做更方便的组件
//标签体里内容是一个特殊的属性也会被收集，标签自结束就可以直接出现它