import React from 'react';
import cl from "./common.module.scss"


const MyTextArea = ({ className, ...props }) => {
    return (
        <textarea {...props}
            className={className ? `${cl.myTextarea} ${className}` : cl.myTextarea}
        >
        </textarea>
    );
};

export default MyTextArea;