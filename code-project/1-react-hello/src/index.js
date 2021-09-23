import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//入口文件 引入核心库 DOM 组件
//包裹 <React.StrictMode> 可以进行检查组件内有没有不符合规范的
//ReactDOM.render只能渲染一个组件，如果再使用它就会覆盖之前的
//想使用其它组件只能作为App的子组件