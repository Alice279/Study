import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Home_message extends Component {

    state = {
        messageArr:[
            {id:'01', title:'message1'},
            {id:'02', title:'message2'},
            {id:'03', title:'message3'}
        ]
    }

    render() {
        const {messageArr} = this.state
        return (
          <div>
            <ul>
                {
                    messageArr.map((msObj)=>{
                        return (
                            <li key={msObj.id}>

                                {/** 向路由组件传递params参数 */} 
                                {/** <Link to={`/home/home_message/detail/${msObj.id}/${msObj.title}`}>{msObj.title}</Link> */}
                            
                                {/** 向路由组件传递search参数 */}
                                {/** <Link to={`/home/home_message/detail/?id=${msObj.id}&title=${msObj.title}`}>{msObj.title}</Link> */}
                            
                                {/** 向路由组件传递state参数 */}
                                <Link to={{pathname:'/home/home_message/detail', state:{id:msObj.id, title:msObj.title}}}>{msObj.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            
            {/** 声明接收params参数 */} 
            {/** <Route path='/home/home_message/detail/:id/:title' component={Detail} /> */}

            {/** 声明接收search参数 无须接收 */}
            <Route path='/home/home_message/detail' component={Detail} />

            {/** 声明接收state参数 无须接收 */}
            <Route path='/home/home_message/detail' component={Detail} />
          </div>
        )
    }
}
