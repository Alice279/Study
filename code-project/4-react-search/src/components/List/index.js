import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
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
