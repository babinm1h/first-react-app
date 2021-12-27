import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { useParams } from "react-router-dom"
import { setUserProfile, updateStatus, getStatus, savePhoto, saveProfileData } from '../../thunks/thunks';
import withNavigateToLogin from '../../HOC/withNavigateToLogin';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { AppStateType } from '../../redux/store';
import { ProfileType } from '../../types/profileTypes';


type ProfileContainerProps = {
    authorizedUser: any,
    setUserProfile: (userId: any) => void,
    getStatus: (userId: any) => any,
    profileIsLoading: boolean,
    profile: ProfileType
    status: string,
    updateStatus: (status: string) => any,
    savePhoto: (img: any) => any,
    saveProfileData: (profile: ProfileType) => Promise<any>
}

export const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {

    const params = useParams()
    let userId = params.userId

    if (!userId) {
        userId = props.authorizedUser
    }

    React.useEffect(() => {
        props.setUserProfile(userId)
        props.getStatus(userId)
    }, [userId])

    if (props.profileIsLoading) {
        return <Preloader />
    }

    return (
        <Profile profile={props.profile} status={props.status}
            updateStatus={props.updateStatus}
            isOwner={!params.userId}
            savePhoto={props.savePhoto}
            saveProfileData={props.saveProfileData}
        />
    );
};


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUser: state.auth.id,
        isAuth: state.auth.isAuth,
        profileIsLoading: state.profilePage.profileIsLoading,
    }
}


export default compose(
    connect(mapStateToProps, { setUserProfile, updateStatus, getStatus, savePhoto, saveProfileData }),
    withNavigateToLogin
)(ProfileContainer)