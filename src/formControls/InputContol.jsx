import React from 'react';
import { Field } from "formik";



const InputContol = ({ name, ...rest }) => {
    return (
        <Field id={name} name={name} {...rest} />
    );
};

export default InputContol;