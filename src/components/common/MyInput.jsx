import React from 'react';
import cl from "./common.module.scss"

const MyInput = ({ className, ...props }) => {
    return (
        <input type="text"{...props}
            className={className ? `${cl.default_input} + ${className}` : cl.default_input}
            autoFocus
        />
    );
};

export default MyInput;