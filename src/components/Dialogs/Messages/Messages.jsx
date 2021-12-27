import { Formik, Form, Field, useFormik, FormikProps } from 'formik';
import React, { FormEvent } from 'react';
import MyButton from '../../common/MyButton';
import MyTextArea from '../../common/MyTextArea';
import MessageItem from './MessageItem/MessageItem';
import * as Yup from "yup";
import { MessageType } from '../../../types/dialogsTypes';


const Messages = ({ messages, addNewMessage }) => {
    const messageItems = messages.map(m => <MessageItem messageText={m.message} key={m.id} />)

    return (
        <div className="dialogs_column">
            <div className="messages">
                <div className="messages_row">

                    {messageItems}

                </div>
            </div>

            <MessagesForm addNewMessage={addNewMessage} />

        </div>
    );
};




const MessagesForm = ({ addNewMessage }) => {

    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit(values, { resetForm }) {
            addNewMessage(values.message)
            console.log("gg")
            resetForm()
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .required("Введите хотя-бы 1 символ")
        })
    })

    return (
        <Formik>
            <Form action="/" className="messages_form" onSubmit={formik.handleSubmit}>
                <Field name="message" id="message"
                    component={MyTextArea}
                    placeholder="Новое сообщение..."
                    className="messages_textarea"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <MyButton type="submit">Отправить</MyButton>
            </Form>
        </Formik>
    )
}


export default Messages;