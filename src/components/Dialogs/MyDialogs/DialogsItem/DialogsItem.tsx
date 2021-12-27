import React from 'react';
import userImg from "../../../../default/user.png"


type DialogsItemProps = {
    name: string
}

const DialogsItem: React.FC<DialogsItemProps> = ({ name, ...props }) => {
    return (
        <div className="dialogs-users_item">
            <img src={userImg} alt="profile_picture" className="small_avatar" />
            <div className="dialogs-users_name">{name}</div>
        </div>
    );
};

export default DialogsItem;