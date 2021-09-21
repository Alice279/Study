//创建“外壳”组件
//import React from 'react'
//import React,{Component} from 'react'也可以
//后面可以直接class App extends React.Component{}
//但是这不是解构赋值，而说明react里的Component分别暴露了
//是默认暴露和分别暴露同时引入
import React, {Component} from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
//箭头函数的快捷生成方式：an+tab

//创建并暴露App组件
export default class App extends Component{

  //初始化状态
  state = {todos:[
    {id:'001', name:'eat', done:true},
    {id:'002', name:'sleep', done:false},
    {id:'003', name:'code', done:true}
  ]}
  //状态在哪里，操作状态的方法就在哪里

  //父通过props给子传递一个函数
  //子组件可以通过调用这个函数给父组件传递东西
  //用于添加一个todo，接收的参数是一个todo对象
  addTodo = (todoObj)=>{
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({todos:newTodos})
  }
  
  //updateTodo用于更新一个todo对象
  updateTodo = (id, done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //加工数据，找到指定项的指定属性
    const newTodos = todos.map((todo)=>{
      if(todo.id === id) return {...todo,done}//可以直接这样写是拷贝并改值
      else return todo
    })
    this.setState({todos: newTodos})
  }

  //删除一个todo
  deleteTodo = (id)=>{
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //状态更新
    this.setState({todos:newTodos})
  }

  //全选todo
  checkAll = (done)=>{
    //获取
    const {todos} = this.state
    //加工
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    this.setState({todos:newTodos})
  }

  //清除所有已完成的
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}

