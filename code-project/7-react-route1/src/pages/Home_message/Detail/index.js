import React, { Component } from 'react'
//import qs from 'querystring'

const Detaildata = [
    {id:'01', content:'hello,China'},
    {id:'02', content:'hello,Hebei'},
    {id:'03', content:'hello,Alice'}
]

export default class Detail extends Component {
    render() {
        //接收params参数
        //const {id, title} = this.props.match.params

        //接收search参数
        //const {search} = this.props.location
        //const {id, title} = qs.parse(search.slice(1))

        //接收state参数
        const {id, title} = this.props.location.state || {}

        const findResult = Detaildata.find((detailObj)=>{
            return detailObj.id === id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}

//接收params或search参数时在地址栏路径里体现，所以刷新页面也不会丢失数据

//接收state参数时候在地址栏路径里并不体现，但是刷新也不会丢失数据
//因为会维护到Router的history属性里
//但是强制刷新清除了所有数据当然也包括history，数据就为undefined
//所以为了避免报错，在接收参数，以及findResult那里要加上 || {}
//或一个空对象，当数据为undefined时候就读取空对象


