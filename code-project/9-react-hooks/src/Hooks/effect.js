import React, { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCount(count + 1);
        return () => {console.log(count)}
        //如果副作用函数返回一个函数，则每次渲染之后都会返回这个函数，
        //每次返回的函数会在下一次渲染之后执行副作用之前执行，
        //如涉及到变量，使用的是返回这个函数时的那次渲染的变量的值
    }, [loading])
    //如果想只是渲染一次，则传入空数组
    //如果这个loading 不是内部的状态，而是外部传入的props，则做到了使用外部的props控制内部的状态，这就是受控组件


    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setLoading(loading => !loading)} style={{ width: '50px', height: '20px', margin: '10px' }}></button>
        </div>
    )
}

export default Effect