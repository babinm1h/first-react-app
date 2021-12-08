import React from 'react';
import { Formik, Field } from "formik";



const InputContol = ({ name, ...rest }) => {
    return (
        <div>
            <Field id={name} name={name} {...rest} />
        </div>
    );
};

export default InputContol;