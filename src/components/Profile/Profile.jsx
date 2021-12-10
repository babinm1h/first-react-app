import React from 'react';
import MyPostsContainer from '../containers/MyPostsContainer';
import "./Profile.scss"

const Profile = ({ profile }) => {
    console.log(profile)
    return (
        <div className="profile">
            <div className="profile_block">
                <div className="profile_avatar">
                    <img src="https://sun9-68.userapi.com/impg/0bhV2G6St0yeRfTE2zN6akygq2J2z-1wup0RCA/as87WBRRVcU.jpg?size=1280x853&quality=96&sign=4fe875013e34499cf7a7d22d34da01d8&type=album" alt="avatar-img" />
                </div>
                <div className="profile_info">
                    <div className="profile_name">ww</div>
                    <div className="profile_status">status</div>
                </div>
            </div>

            <MyPostsContainer />
        </div>
    );
};

export default Profile;