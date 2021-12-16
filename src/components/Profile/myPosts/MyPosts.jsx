import React from 'react';
import MyTitle from '../../common/MyTitle';
import MyTextArea from '../../common/MyTextArea';
import MyButton from '../../common/MyButton';
import { Field, Form, Formik, useFormik } from "formik";
import PostItem from './PostIem/PostItem';
import * as Yup from "yup"


const MyPosts = (props) => {

    return (
        <div className="posts">
            <MyTitle>Мои посты</MyTitle>
            <PostsForm addNewPost={props.addNewPost} />
            <div className="my_posts">
                <div className="my-posts_row">
                    {props.posts.map(p => <PostItem text={p.text} key={p.id} likes={p.likes} PostId={p.id}
                        deletePost={props.deletePost}
                        profilePhoto={props.profile.photos.small}
                    />)}
                </div>
            </div>
        </div>

    );
};




const PostsForm = ({ addNewPost }) => {

    const formik = useFormik({
        initialValues: {
            area: ""
        },
        onSubmit(values, { resetForm }) {
            addNewPost(values.area)
            resetForm()
        },
        validationSchema: Yup.object({
            area: Yup.string()
                .required("Введите текст")
        })
    })

    return (
        <Formik>
            <Form action="/" className="posts_form" onSubmit={formik.handleSubmit}>
                <Field placeholder="Введите текст..."
                    value={formik.values.area}
                    onChange={formik.handleChange}
                    component={MyTextArea}
                    id="area" name="area"
                    className={formik.errors.area ? "someError" : null}
                />
                <div className={"post_error"}>{formik.errors.area}</div>
                <div className="posts_btn">
                    <MyButton >Добавить пост</MyButton>
                </div>
            </Form>
        </Formik>
    )
}


export default MyPosts;