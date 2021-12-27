import React, { ChangeEvent } from 'react';
import userImg from "../../../default/user.png"
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { MdUpload } from "react-icons/md"
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { ProfileProps } from '../Profile';
import { ProfileType } from '../../../types/profileTypes';


const ProfileInfo: React.FC<ProfileProps> = ({ profile, isOwner, updateStatus, status, ...props }) => {
    const [editMode, setEditMode] = React.useState<boolean>(false)

    const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const goToEdit = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div className="profile_info">
            <ProfileMainBlock profile={profile} status={status} updateStatus={updateStatus} />

            {isOwner &&
                <div className="avatar-change">
                    <label htmlFor="file">
                        <span className="avatar-change_inner"><MdUpload size={22} /></span>Изменить фото
                    </label>
                    <input type="file" name="file" id="file" className="avatar-change_button"
                        onChange={changeAvatar}
                    />
                    <div className="profile-change">
                        <button onClick={goToEdit}>Изменить профиль</button>
                    </div>
                </div>}

            {editMode
                ? <ProfileDataForm profile={profile} initialValues={profile}
                    deactivateEditMode={deactivateEditMode}
                    saveProfileData={props.saveProfileData}
                />
                : <ProfileData profile={profile} />}
        </div>
    );
};


export type ProfileMainBlockProps = {
    profile: ProfileType
    updateStatus: (status: string) => any
    status: string
}

const ProfileMainBlock: React.FC<ProfileMainBlockProps> = ({ profile, updateStatus, status, ...props }) => {
    return (
        <div className="profile_maininfo">
            <div className="profile_avatar">
                {profile.photos.large
                    ? <img src={profile.photos.large} alt="user" />
                    : <img src={userImg} alt="user" />
                }
            </div>
            <div className="profile_info">
                <div className="profile_name">{profile.fullName}</div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;