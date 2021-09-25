import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import News from '../Home_news'
import Message from '../Home_message'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                
                <Link to='/home/home_news'>News</Link>
                <Link to='/home/home_message'>Message</Link>

                <Route path='/home/home_news' component={News}></Route>
                <Route path='/home/home_message' component={Message}></Route>
            </div>
        )
    }
}

//多级路由时，之前所有级的路由都要写上，因为要先查到前面的级别并显示出来

//有多级路由多级组件时，可以用文件夹的包含关系来体现级别，也可以设成同级文件夹