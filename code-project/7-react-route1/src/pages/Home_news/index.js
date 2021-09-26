import React, { Component } from 'react'

export default class Home_news extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push('/home/home_message')
        }, 2000)
    }

    render() {
        return (
            <ul>
                <li>news01</li>
                <li>news02</li>
                <li>news03</li>
            </ul>
        )
    }
}
