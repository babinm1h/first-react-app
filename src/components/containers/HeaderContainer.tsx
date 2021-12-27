import React from 'react';
import Header from '../Header/Header';
import { connect } from "react-redux";
import { logout } from '../../thunks/thunks';
import { AppStateType } from '../../redux/store';
import { ProfileType } from '../../types/profileTypes';

export type HeaderProps = {
    isAuth: boolean,
    login: string | null,
    logout: () => any
}

const HeaderContainer: React.FC<HeaderProps> = (props) => {
    return (
        <Header isAuth={props.isAuth} login={props.login} logout={props.logout}
        />
    );
};


type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
    profile: ProfileType | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);