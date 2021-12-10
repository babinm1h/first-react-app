import React from 'react';
import cl from "./common.module.scss"


const MyTextArea = ({ className, ...props }) => {
    return (
        <textarea {...props}
            className={className ? `${cl.myTextarea} ${className}` : cl.myTextarea}
            autoFocus
        >
        </textarea>
    );
};

export default MyTextArea;