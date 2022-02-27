import React, { useReducer } from "react";

const initialState = 0; //类比于redux中的store

const reducer = (state, action) => {
    switch (action) {
        case 'add': return state + 1;
        case 'jian': return state - 1;
        default: return state;
    }
}

function Reducer() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('add')}>加1</button>
            <button onClick={() => dispatch('jian')}>减1</button>
        </div>
    )
}

export default Reducer;

//当应用变得再复杂，则useReducer也会太繁琐，而redux有combineReducer()
