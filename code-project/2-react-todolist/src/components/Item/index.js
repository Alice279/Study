import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse:false}

    //鼠标移入移出回调
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //勾选、取消勾选回调
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //删除一个todo的回调
    handleDelete = (id)=>{
        if(window.confirm('确定删除吗')){
            this.props.deleteTodo(id)
        }
    }

    render(){
        const {id, name, done} = this.props
        return (
            <li className={this.state.mouse? 'Pitem' : 'item'} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className={this.state.mouse? 'Pbutton' : 'button'}>删除</button>
            </li>
        )
    }
}