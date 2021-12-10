import React from 'react';
import MyButton from '../../../common/MyButton';
import userImg from "../../../default/user.png"

const UserItem = ({ follow, unfollow, users, user }) => {
    return (
        <div className="users_item user">
            <div className="user_img">
                <img src={userImg} alt="user_image" className="big_avatar" />
            </div>
            <div className="user_info">
                <div className="user_name">{user.name}</div>
                <div className="user_status">status:{user.status}</div>
            </div>
            <div className="user_buttons">
                {user.followed
                    ? <MyButton onClick={() => unfollow(user.id)} className="follow_btn">
                        Отписаться
                    </MyButton>
                    : <MyButton onClick={() => follow(user.id)} className="follow_btn">
                        Подписаться
                    </MyButton>
                }
            </div>
        </div>
    );
};

export default UserItem;