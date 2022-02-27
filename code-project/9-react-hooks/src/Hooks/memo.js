//优化手段：记忆函数
//记忆函数利用闭包，就是在函数外面定义变量，保存函数的计算结果，方便下一次计算使用
//所以联想到，其实函数对于全局环境也是闭包，模块也是闭包

//useMemo 记忆计算结果。两个参数：函数，依赖项。依赖项中的发生变化时就调用函数从新计算结果。
//useCallback 记忆函数体。两个参数：函数，依赖项。依赖项中的发生变化时就重新创建函数。

import React, { useMemo, useCallback, useState } from "react";

export default function Memo() {
    const [target, setTarget] = useState(0);
    const [other, setOther] = useState(0);

    //useMemo记忆的是结果呀，所以它的那个函数参数必须有返回值
    const sum = useMemo(() => {
        console.log("重新计算一次");
        let res = 0;
        for (let i = 1; i <= target; i++) {
            res += i;
        }
        return res;
    }, [target])

    const inputChange = useCallback((e) => {
        console.log(e.target.value)
    }, [])

    return (
        <div>
            <input type="text" onChange={inputChange} />
            <div>{target} {sum}</div>
            <button onClick={() => setTarget(target + 1)}>递增</button>
            <button onClick={() => setTarget(target - 1)}>递减</button>

            <div>干扰项: {other}</div>
            <button onClick={() => setOther(other + 1)}>递增</button>
            <button onClick={() => setOther(other - 1)}>递减</button>
        </div>
    )
}

//记忆函数并非完全没有代价，我们需要创建闭包，占用更多的内存，来解决计算上的冗余