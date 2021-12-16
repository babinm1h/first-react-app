import React from 'react';
import MyButton from '../../../common/MyButton';
import { BiLike } from "react-icons/bi"


const PostItem = ({ text, likes, deletePost, PostId, profilePhoto }) => {


    return (
        <div className="my-posts_item post">
            <div className="post_img">
                <img className="small_avatar" src={profilePhoto} alt="ava" />
            </div>
            <div className="post_body">
                <div className="post_text">{text}</div>
                <div className="post_likes">
                    <span ><BiLike size={16} /></span>{likes}
                </div>
            </div>
            <MyButton onClick={() => deletePost(PostId)}>Удалить</MyButton>
        </div>
    );
};

export default PostItem;