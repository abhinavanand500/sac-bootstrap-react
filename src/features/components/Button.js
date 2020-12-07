import React from "react";
import "./Component.css";
const Button = (props) => {
    return (
        <div>
            <button
                type='button'
                data-toggle={props.dataToggle ? props.dataToggle : ""}
                data-target={props.dataTarget ? props.dataTarget : ""}
                data-dismiss={props.dataDismiss ? props.dataDismiss : ""}
                className={`inlineBlock btn mx-2 my-2 ${props.style.value}`}>
                {props.title}
            </button>
        </div>
    );
};

export default Button;
