import React from 'react';
import userImg from "../../default/user.png"

const ProfileInfo = ({ profile, ...props }) => {
    return (
        <div className="profile_block">
            <div className="profile_avatar">
                {profile.photos.large
                    ? <img src={profile.photos.large} alt="user" />
                    : <img src={userImg} alt="user" />
                }
            </div>
            <div className="profile_info">
                <div className="profile_name">{profile.fullName}</div>
                <div className="profile_status">{profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;