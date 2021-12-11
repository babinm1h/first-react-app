import React from 'react';
import MyTitle from '../common/MyTitle';
import "./Login.scss"
import { Formik, useFormik, Field, Form } from 'formik';
import * as Yup from "yup";
import MyInput from "../common/MyInput"


const Login = (props) => {
    return (
        <div className="login">

            <LoginForm />

        </div>
    );
};


const LoginForm = ({ }) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: () => {

        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Введите свой e-mail")
                .required("Введите свой e-mail")
        })
    })

    return (
        <Formik>
            <Form action="" className="login-form">
                <div className="login_title">Вход в аккаунт</div>

                <Field id="email" type="text" name="email"
                    value={formik.values.email}
                    className="login-form_input"
                    onChange={formik.handleChange}
                    placeholder="Your email..."

                />

                <Field id="password" type="password" name="password"
                    value={formik.values.password}
                    className="login-form_input"
                    onChange={formik.handleChange}
                    placeholder="Your password..."
                />

                <button type="submit" className="login-form_btn">Войти</button>

            </Form>
        </Formik>
    )
}

export default Login;