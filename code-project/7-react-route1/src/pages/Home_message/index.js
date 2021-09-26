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

    //编程式路由导航，不用非点链接才跳，我想啥时候跳啥时候跳

    replaceShow = (id, title)=>{
        //编写代码，让其跳转到Detail组件，并且为replace跳转
        console.log(this.props)
        this.props.history.replace('/home/home_message/detail', {id, title})
    }

    pushShow = (id, title)=>{
        //编写代码，让其跳转到Detail组件，并且为push跳转
        this.props.history.push('/home/home_message/detail', {id, title})
    }

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
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

                                &nbsp;<button onClick={()=> this.pushShow(msObj.id, msObj.title)}>push查看</button>
                                &nbsp;<button onClick={()=> this.replaceShow(msObj.id, msObj.title)}>replace查看</button>
                            </li>
                        )
                    })
                }
            </ul>
            
            {/** 声明接收params参数 */} 
            {/** <Route path='/home/home_message/detail/:id/:title' component={Detail} /> */}

            {/** 声明接收search参数 无须接收 */}
            {/** <Route path='/home/home_message/detail' component={Detail} /> */}

            {/** 声明接收state参数 无须接收 */}
            <Route path='/home/home_message/detail' component={Detail} />

            <button onClick={this.back}>回退</button>
            <button onClick={this.forward}>前进</button>

          </div>
        )
    }
}
