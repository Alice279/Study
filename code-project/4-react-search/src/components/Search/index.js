import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = ()=>{
        //获取用户的输入(连续解构赋值 + 重命名)
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`http://localhost:3000/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading:false, err:error.messag})//不要存储错误对象，整个页面就崩了，我们要展示的错误对象里的信息
            }
        )
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