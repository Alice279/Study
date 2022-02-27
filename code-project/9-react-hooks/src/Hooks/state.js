import React, {useState} from "react";

function State() {

    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [radius, setRadius] = useState(0);

    const style = {
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `${radius}px`,
        backgroundColor: `rgb(279,29,79)`
    }

    const change = () => {
        setHeight(height => height +1);
        setRadius(radius => radius + 1);
    }

    return (
        <div>
            {/* <button onClick={setHeight(height + 1)}></button> */}
            <div style={style}></div>
            <button onClick={change} style={{width: '50px', height: '20px', margin: '10px'}}></button>
        </div>
    )
}

export default State;