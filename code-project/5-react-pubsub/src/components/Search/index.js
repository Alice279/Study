import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = async ()=>{
        //获取用户的输入(连续解构赋值 + 重命名)
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知App更新状态
        PubSub.publish('消息名', {isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`http://localhost:3000/search/users?q=${keyWord}`).then(
            response => {
                //this.props.updateAppState({isLoading:false, users:response.data.items})
                PubSub.publish('消息名', {isLoading:false, users:response.data.items})
            },
             error => {
                PubSub.publish('消息名', {isLoading:false, err:error.messag})//不要存储错误对象，整个页面就崩了，我们要展示的错误对象里的信息
            }
        )
        
        //发送网络请求，使用fetch——未优化
        /**
        fetch(`http://localhost:3000/search/users?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了');
                return response.json() //联系服务器成功之后返回一个promise实例
            },
            error => {
                console.log('联系服务器失败了');
                return new Promise(()=>{}) //中断promise链，返回一个初始化状态的promise实例
                }
        ).then(
            response => {console.log('获取数据成功了'), response},
            error => {console.log('获取数据失败了'), error}
        )
        */

        //发送网络请求，使用fetch——优化
        /** 
        try {
            const response = await fetch(`http://localhost:3000/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('请求出错', error)
        }
        */ 
    }

    render() {
        return (
            <div>
                <section className="jumbotorn">
                    <h3 className="jumbotorn-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}

//this上有keyWordElement，keyWordElement上有value
//常规解构赋值  const {value} = this.keyWordElement
//连续解构赋值  const {keyWordElement:{value}} = this.keyWordElement
//连续解构赋值时还可以给变量重命名 ：
// let obj2 = {a:{b:1}}
// const {a:{b:data}} = obj2
// console.log(data)