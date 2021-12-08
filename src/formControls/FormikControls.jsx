
import React from 'react';
import InputContol from "./InputContol";





const FormikControls = ({ control, ...rest }) => {

    switch (control) {

        case "input":
            return <InputContol {...rest} />

        default:
            return null
    }
};

export default FormikControls;