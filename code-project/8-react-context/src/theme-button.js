import React from 'react';
import {ThemeContext} from './theme-context'

class ThemeButton extends React.Component {
    render() {
        let prop = this.props;
        let theme = this.context;
        /**接收props，不然onClick函数和props.children都用不了 */
        return (
            <button 
              {...prop}
              style={{backgroundColor: theme.background, width: '200px', height: '90px'}}
            />
        )
    }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton
//我这个组件是一个消费者，我可以通过contexType属性来绑定一个context对象
//之后我组件内就可以读取this.context的值
//我这个组件包裹在Provider内部，this.context的值就是Provider提供的value值
//如果Provider没有提供value或者根本没Provider，就是context对象创建时的默认值 