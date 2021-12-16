import React from 'react';
import "./Login.scss"
import { Formik, useFormik, Field, Form } from 'formik';
import * as Yup from "yup";
import { Navigate } from 'react-router';


const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div className="login">
            <LoginForm login={props.login} />
        </div>
    );
};




const LoginForm = ({ login }) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            login(values.email, values.password, false, false)
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Введите свой e-mail")
                .required("Введите свой e-mail"),
            password: Yup.string()
                .min(3, "Длина пароля должна быть более 3 символов")
                .max(20, "Длина пароля должна быть менее 20 символов")
                .required("Введите пароль")
        })
    })

    return (
        <Formik>
            <Form action="" className="login-form" onSubmit={formik.handleSubmit}>
                <div className="login_title">Вход в аккаунт</div>

                <div className="login-form_field">
                    <label htmlFor="email" className="login-form_label">e-mail</label>
                    <Field id="email" type="text" name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Your email..."
                        className={formik.errors.email
                            ? "login-form_input someError"
                            : `login-form_input`}
                    />

                    {formik.errors.email && <span className="login-form_error">
                        {formik.errors.email}
                    </span>}
                </div>


                <div className="login-form_field">
                    <label htmlFor="password" className="login-form_label">password</label>
                    <Field id="password" type="password" name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Your password..."
                        className={formik.errors.password
                            ? "login-form_input someError"
                            : `login-form_input`}
                    />

                    {formik.errors.password && <span className="login-form_error">
                        {formik.errors.password}
                    </span>}
                </div>

                <button type="submit" className="login-form_btn">Войти</button>

            </Form>
        </Formik>
    )
}

export default Login;