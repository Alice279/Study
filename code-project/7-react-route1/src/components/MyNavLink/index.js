import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        const {to, title} = this.props
        return (
            //<NavLink activeClassName="123" className="456" {...this.props} ></NavLink>,
            <NavLink activeClassName="123" className="456" {...this.props} />
            //如果使用注释掉的语句，传过来的函数体里的内容不会输出，标签自结束就可以输出函数体里的内容
        )
    }
}
