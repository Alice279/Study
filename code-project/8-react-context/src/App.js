import React from 'react';
import './App.css';

import {ThemeContext, themes} from './theme-context';
import ThemeButton from './theme-button';
import ThemeTogglerButton from './theme-toogler-button'

//这个中间件，调试窗口里它根本不出现，调试窗口里只出现HTML标签
function Toolbar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}>
      Change Theme
      {/**你这里这个是一个特殊的props，props.children，你想体现它必须在button组件那边显式的写出props */}
      {/**包括那个onclick函数，给button传过去它得接收 */}
    </ThemeButton>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }
  }

  toggleTheme = () => {
    this.setState({
      theme:
      this.state.theme === themes.dark
        ? themes.light
        : themes.dark,
    })
  }
  //发现在这个示例里，“属性值”是直接使用的，没有通过Toolbar传递，但是改变颜色的方法还是一层一层传的

  render() {
    return (
      <div>
        {/**Provider里value就是设置了消费者读取的context的值 */}
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
        {/**上下这两个就是来对比一下，放在Provider里和使用默认值，就是不放在Provider里也能用 */}
        <div>
          <ThemeButton />
        </div>
      </div>
    )
  }
}

export default App;
 