//useRef 函数，返回一个可变引用对象
//该对象的 .current 属性的初始值为 useRef 传入的参数 initialVale
//该对象在组件的整个生命周期中都存在
//useRef 的两种用途：访问DOM节点；保持可变变量

import React, {useRef, Fragment} from "react";

function Ref() {
    const inputRef = useRef(null);

    const focus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            //默认支持的input组件本身拥有 .focus .blur 方法
        }
    }

    return (
        <Fragment>
            <input type='text' ref={inputRef}/>
            <button onClick={focus}>点击我让input组件获得焦点</button>
        </Fragment>
    )
}

export default Ref;