import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = ()=>{
    axios.get().then(
      response => {console.log('成功了', response.data)},//axios返回的数据放在response.data里面
      error => {console.log('失败了', error)}
    )
  }

  render(){
    return(
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}