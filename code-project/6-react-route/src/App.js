import React, {Component} from 'react'
//import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Link, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

export default class App extends Component {

  render(){
    return (
      <div>
        <h2>React Router Demo</h2>
        
        {/** <BrowserRouter>*/}

        {/**编写路由链接 */}
          <Link to="/about">About</Link>
          <Link to="/home">Home</Link>
        
        {/**注册路由 */}
        
          <Route path='/about' component={About}/>
          <Route path='/home' component={Home}/>

        {/** </BrowserRouter>*/}
      </div>
    )
  }
}
//原生js中靠<a>标签跳转不同的页面
//react中靠路由链接实现组件切换

//Router分为BrowserRouter和HashRouter
//HashRouter路径里面带#

//BrowserRouter一个路由器需要包裹所有的组件
//所以我们可以直接把整个App包裹起来
//不在当前页面引入BrowserRouter