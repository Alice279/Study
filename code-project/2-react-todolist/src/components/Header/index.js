import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    //对接收的props进行类型以及必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        //解构赋值
        const {keyCode, target} = event
        //判断是否是回车按键
        if(keyCode !== 13) return
        //添加的todo名字不能为空
        if(target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        //准备好一个todo对象
        //uuid一个库，用于生成全球唯一标识，或者nanoid
        const todoObj = {id:nanoid(), name:target.value, done:false}
        //将todoObj传递给父组件
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名称，按回车键确认" className="input"></input>
            </div>
        )
    }
}
