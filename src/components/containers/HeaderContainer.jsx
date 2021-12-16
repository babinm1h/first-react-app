import React from 'react';
import Header from '../Header/Header';
import { connect } from "react-redux";
import { logout } from '../../thunks/thunks';


const HeaderContainer = (props) => {


    return (
        <Header isAuth={props.isAuth} login={props.login} logout={props.logout}
        />
    );
};



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);