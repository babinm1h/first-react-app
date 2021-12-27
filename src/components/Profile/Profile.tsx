import React from 'react';
import MyPostsContainer from '../containers/MyPostsContainer';
import "./Profile.scss"
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../types/profileTypes';


export type ProfileProps = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    savePhoto: (img: any) => any
    saveProfileData: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<ProfileProps> = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile">
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus}
                status={props.status}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfileData={props.saveProfileData}
            />
            <MyPostsContainer />
        </div>
    );
};


export default Profile;