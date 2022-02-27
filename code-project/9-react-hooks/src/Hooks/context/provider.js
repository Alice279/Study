import React, {createContext, useState} from "react";

export const context = createContext({});

export function ContextProvider(props) {

    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1)
    }

    return (
        <context.Provider value={value}>{props.children}</context.Provider>
    )
}