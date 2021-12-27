import React from 'react';
import cl from "./common.module.scss"

type MyInputProps = {
    className?: string,
    value?: string | number,
    onBlur?: () => void
    onChange?: (any: any) => any
}

const MyInput: React.FC<MyInputProps> = ({ className, ...props }) => {
    return (
        <input type="text"{...props} autoFocus
            className={className ? `${cl.default_input} ${className}` : cl.default_input}
        />
    );
};

export default MyInput;