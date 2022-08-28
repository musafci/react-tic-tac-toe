import React from "react";

function Square(props) {
    return (
        <button className="square order border-primary text-primary" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;