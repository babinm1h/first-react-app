import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../../common/MyButton';
import userImg from "../../../../default/user.png"
import { UserType } from '../../../../types/usersTypes';


type UserItemProps = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followProgress: number[],
    user: UserType
}

const UserItem: React.FC<UserItemProps> = ({ follow, unfollow, user, followProgress }) => {
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
                <div className="user_status"><span>status:</span>{user.status}</div>
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