import React from 'react';
import cl from "./common.module.scss"

type MyButtonProps = {
    children: any,
    className?: string,
    onClick?: () => void,
    disabled?: any,
    type?: any
}

const MyButton: React.FC<MyButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={className ? `${cl.default_btn} + ${className}` : cl.default_btn}
            type='submit'{...props}>
            {children}
        </button>

    );
};

export default MyButton;