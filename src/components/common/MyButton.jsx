import React from 'react';
import cl from "./common.module.scss"


const MyButton = ({ children, className,...props }) => {
    return (
        <button className={className ? `${cl.default_btn} + ${className}` : cl.default_btn}
            type='submit'{...props}>
            {children}
        </button>

    );
};

export default MyButton;