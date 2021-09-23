import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width:100}}/>
                        </a>
                        <p>reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width:100}}/>
                        </a>
                        <p>reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width:100}}/>
                        </a>
                        <p>reactjs</p>
                    </div>
                </div>
            </div>
        )
    }
}
