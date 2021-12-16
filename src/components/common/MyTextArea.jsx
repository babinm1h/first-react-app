import React from 'react';
import cl from "./common.module.scss"


const MyTextArea = ({ className, ...props }) => {
    return (
        <textarea {...props}
            className={className ? `${cl.myTextarea} ${className}` : cl.myTextarea}
            autoFocus={false}
        >
        </textarea>
    );
};

export default MyTextArea;