import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { setProfile } from '../../action/actionCreators';
import { profileApi } from '../../API/profileApi';
import * as axios from "axios"
import { useParams, Navigate } from "react-router-dom"
import { setUserProfile } from '../../thunks/thunks';



export const ProfileContainer = (props) => {

    const params = useParams()
    let userId = params.userId

    if (!userId) {
        userId = 11
    }

    React.useEffect(() => {
        props.setUserProfile(userId)
    }, [])


    if (!props.isAuth) {
        return <Navigate to="/login" />
    }

    return (
        <Profile profile={props.profile} />
    );
};



const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);