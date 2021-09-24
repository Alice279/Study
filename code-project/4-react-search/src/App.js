import React, {Component} from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users:[],
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//是否处于加载中
    err:""//存储请求相关的错误信息
  }

  updateAppState = (users)=>{
    this.setState({users})
  }

  render(){
    return (
      <div className="container">
        <Search saveUsers={this.updateAppState}/>
        <List users={...this.state}/>
      </div>
    )
  }
}