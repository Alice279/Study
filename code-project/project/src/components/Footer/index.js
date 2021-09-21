import React, { Component } from 'react'

export default class Footer extends Component {

    //全选、全不选的回调
    handleCheckAll = (event)=>{
        this.props.checkAll(event.target.checked)
    }

    //清除所有已完成的
    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        //已完成数
        //reduce方法两个参数：回调 和 七时至；回调也有两个参数：上一步的结果 和 当前遍历到的值
        const doneCount = todos.reduce((pre, current)=>{return pre + (current.done? 1 : 0)}, 0)
        //总数
        const total = todos.length
        return (
            <div>
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}></input>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{total}
                </span>
                <button onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
