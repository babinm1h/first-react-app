import React from 'react';
import { Formik, useFormik, Field, Form } from 'formik';
import FormikControls from "../../../../formControls/FormikControls"
import MyButton from '../../../common/MyButton';
import MyInput from '../../../common/MyInput';
import * as Yup from "yup"

const ProfileDataForm = ({ profile, deactivateEditMode, ...props }) => {

    const formik = useFormik({
        initialValues: { ...props.initialValues },
        enableReinitialize: true,

        onSubmit(values) {
            props.saveProfileData(values)
            deactivateEditMode()
        },

        validationSchema: Yup.object({
            fullName: Yup.string()
                .required("Введите свое имя")
                .min(2, "Не менее 2 символов")
                .max(44, "Максимальная длина - 45 символов"),
            lookingForAJob: Yup.string()
                .required("Введите данные")
                .min(1, "Не менее 1 символа"),
            aboutMe: Yup.string()
                .required("Введите данные")
                .min(1, "Не менее 1 символа"),
            lookingForAJobDescription: Yup.string()
                .required("Введите данные")
                .min(1, "Не менее 1 символа"),
        })
    })

    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <div className="profile_data profile-data">
                    <div className="profile-data_item">
                        <span className="profile-data_label">*Ищу работу:</span>
                        <Field name="lookingForAJob" id="lookingForAJob"
                            value={formik.values.lookingForAJob}
                            onChange={formik.handleChange}
                            component={MyInput}
                            className={formik.errors.lookingForAJob ? "inputError" : null}
                        />
                    </div>
                    <div className="profile-data_item">
                        <span className="profile-data_label">*My skills:</span>
                        <Field name="lookingForAJobDescription" id="lookingForAJobDescription"
                            value={formik.values.lookingForAJobDescription}
                            onChange={formik.handleChange}
                            component={MyInput}
                            placeholder="Ваши навыки"
                            className={formik.errors.lookingForAJobDescription ? "inputError" : null}
                        />
                    </div>
                    <div className="profile-data_item">
                        <span className="profile-data_label">*Имя:</span>
                        <Field name="fullName" id="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            component={MyInput}
                            placeholder="Ваше имя"
                            className={formik.errors.fullName ? "inputError" : null}
                        />
                    </div>
                    <div className="profile-data_item">
                        <span className="profile-data_label">*Обо мне:</span>
                        <Field name="aboutMe" id="aboutMe"
                            value={formik.values.aboutMe}
                            onChange={formik.handleChange}
                            component={MyInput}
                            placeholder="О себе"
                            className={formik.errors.aboutMe ? "inputError" : null}
                        />
                    </div>
                    <div className="profile-data_item">
                        <span className="profile-data_label">Контакты:</span>
                    </div>

                    {Object.keys(profile.contacts).map(key => {
                        return <div className="profile-data_item" key={key}>
                            <span className="profile-data_label">{key}:</span>
                            <FormikControls control="input"
                                onChange={formik.handleChange}
                                placeholder={"Ваш " + key} component={MyInput}
                                type="url"
                                className="profile-data_input"
                                id={`contacts.` + key}
                            />
                        </div>
                    })}

                    <MyButton type="submit"
                        disabled={formik.errors.lookingForAJob || formik.errors.lookingForAJobDescription || formik.errors.aboutMe || formik.errors.fullName} >
                        Сохранить
                    </MyButton>
                </div>
            </Form>
        </Formik>
    );
};




export default ProfileDataForm;