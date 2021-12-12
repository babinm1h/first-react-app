import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { setProfile } from '../../action/actionCreators';
import { profileApi } from '../../API/profileApi';
import * as axios from "axios"
import { useParams, Navigate } from "react-router-dom"
import { setUserProfile, updateStatus, getStatus } from '../../thunks/thunks';
import withNavigateToLogin from '../../HOC/withNavigateToLogin';
import { compose } from 'redux';



export const ProfileContainer = (props) => {

    const params = useParams()
    let userId = params.userId

    if (!userId) {
        userId = props.authorizedUser
    }

    React.useEffect(() => {
        props.setUserProfile(userId)
        props.getStatus(userId)
    }, [])


    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    );
};


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUser: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, { setUserProfile, updateStatus, getStatus }),
    withNavigateToLogin
)(ProfileContainer)