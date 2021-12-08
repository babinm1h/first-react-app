import React from 'react';
import MyButton from '../../../common/MyButton';
import { BiLike } from "react-icons/bi"



const PostItem = ({ text, likes }) => {
    return (
        <div className="my-posts_item post">
            <div className="post_img">
                <img className="small_avatar"
                    src="https://sun9-68.userapi.com/impg/0bhV2G6St0yeRfTE2zN6akygq2J2z-1wup0RCA/as87WBRRVcU.jpg?size=1280x853&quality=96&sign=4fe875013e34499cf7a7d22d34da01d8&type=album" alt="ava" />
            </div>
            <div className="post_body">
                <div className="post_text">{text}</div>
                <div className="post_likes">
                    <span ><BiLike size={16} /></span>{likes}
                </div>
            </div>
            <MyButton>Удалить</MyButton>
        </div>
    );
};

export default PostItem;