import React from "react";
import "./Component.css";
const Button = (props) => {
    return (
        <div>
            <button
                type='button'
                className={`inlineBlock btn mx-2 my-2 ${props.style.value}`}>
                {props.title}
            </button>
        </div>
    );
};

export default Button;
