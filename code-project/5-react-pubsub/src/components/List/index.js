import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users:[],
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//是否处于加载中
        err:""//存储请求相关的错误信息
    }

    componentDidMount(){
        this.token = PubSub.subscribe('消息名', (msg, stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscript(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div>
                <div className="row">
                    {
                        //不可以下写if判断语句，但是我们可以写三元表达式
                        isFirst ? <h2>欢迎使用</h2> :
                        ifLoading ? <h2>Loading...</h2> :
                        err ? <h2>{err}</h2> :
                        users.map((userObj)=>{
                            return(
                                <div key={userObj.id} className="card">
                                    <a rel="noreferrer" href={userObj.url} target="_blank">
                                        <img alt="head_portrait" src={userObj.avatar_url} style={{width:100}}/>
                                    </a>
                                    <p>reactjs</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
