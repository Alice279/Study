import React, { Component } from 'react'

export default class Search extends Component {

    search = ()=>{
        //获取用户的输入
        const {value} = this.keyWordElement
        //发送网络请求
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