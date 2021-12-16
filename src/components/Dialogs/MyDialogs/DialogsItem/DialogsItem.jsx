import React from 'react';
import userImg from "../../../../default/user.png"


const DialogsItem = ({ name, ...props }) => {
    return (
        <div className="dialogs-users_item">
            <img src={userImg} alt="profile_picture" className="small_avatar" />
            <div className="dialogs-users_name">{name}</div>
        </div>
    );
};

export default DialogsItem;