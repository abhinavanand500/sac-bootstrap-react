import React from "react";

const Button = (props) => {
    return (
        <div>
            <button
                type='button'
                className={`btn mx-2 my-2 ${props.style.value}`}>
                {props.title}
            </button>
        </div>
    );
};

export default Button;
