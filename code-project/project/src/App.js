//创建“外壳”组件
//import React from 'react'
//import React,{Component} from 'react'也可以
//后面可以直接class App extends React.Component{}
//但是这不是解构赋值，而说明react里的Component分别暴露了
//是默认暴露和分别暴露同时引入
import React, {Component} from 'react'

import Hello from './hello'

//创建并暴露App组件
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

