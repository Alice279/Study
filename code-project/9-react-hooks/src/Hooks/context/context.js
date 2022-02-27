import React, { useContext } from "react";
import { context, ContextProvider } from './provider'

function Context() {
    const { count = 0, increment, decrement } = useContext(context);

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>递增</button>
            <button onClick={decrement}>递减</button>
        </div>
    )
}

export default () => <ContextProvider><Context /></ContextProvider>;