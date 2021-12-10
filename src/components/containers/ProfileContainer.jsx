import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { setUserProfile } from '../../action/actionCreators';
import { profileApi } from '../../API/profileApi';

export const ProfileContainer = (props) => {
    
    React.useEffect(() => {
        profileApi.setProfile()
            .then(response => setUserProfile(response))
    }, [])

    return (
        <Profile profile={props.profile} />
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);