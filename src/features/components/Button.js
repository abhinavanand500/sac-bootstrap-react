import React from 'react';
import PropTypes from 'prop-types';
import './Component.css';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
const Button = ({ dataToggle, dataTarget, dataDismiss, style: { value }, title, onclick }) => (
    <div>
        <button
            type="button"
            data-toggle={dataToggle}
            data-target={dataTarget}
            data-dismiss={dataDismiss}
            onClick={onclick}
            className={`inlineBlock btn mx-2 my-2 ${value}`}
        >
            {title}
        </button>
    </div>
);

Button.propTypes = {
    dataToggle: PropTypes.string,
    dataTarget: PropTypes.string,
    dataDismiss: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
Button.defaultProps = { dataToggle: '', dataTarget: '', dataDismiss: '', value: '' };
export default Button;
