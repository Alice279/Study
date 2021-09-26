import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

    back = ()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.froward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

export default withRouter(Header)


//一般组件和路由组件最大区别是路由组件有三个props可以使用
//有时候我们希望一般组件也可以有路由组件特有的属性
//可以用withRouter来加工一般组件，返回一个新组件