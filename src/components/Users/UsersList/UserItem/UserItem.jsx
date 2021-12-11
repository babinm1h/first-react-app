import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { usersAPI } from '../../../../API/usersApi';
import MyButton from '../../../common/MyButton';
import userImg from "../../../default/user.png"

const UserItem = ({ follow, unfollow, users, user, followingProgress, followProgress }) => {
    return (
        <div className="users_item user">
            <div className="user_img">
                <Link to={`/profile/${user.id}`}>
                    {user.photos.large
                        ? <img src={user.photos.large} alt="user_image" className="big_avatar" />
                        : <img src={userImg} alt="user_image" className="big_avatar" />
                    }
                </Link>
            </div>
            <div className="user_info">
                <div className="user_name">{user.name}</div>
                <div className="user_status">status:{user.status}</div>
            </div>


            <div className="user_buttons">
                {user.followed
                    ? <MyButton className="follow_btn unfollow"
                        disabled={followProgress.some(id => id === user.id)}
                        onClick={() => unfollow(user.id)} >
                        Отписаться
                    </MyButton>
                    : <MyButton className="follow_btn"
                        disabled={followProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}>
                        Подписаться
                    </MyButton>
                }
            </div>
        </div>
    );
};

export default UserItem;