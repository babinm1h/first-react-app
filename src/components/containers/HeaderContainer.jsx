import React from 'react';
import Header from '../Header/Header';
import { connect } from "react-redux";
import { setAuthData } from '../../action/actionCreators';
import { authApi } from '../../API/authApi';
import { getAuthUser } from '../../thunks/thunks';


const HeaderContainer = (props) => {

    React.useEffect(() => {
        props.getAuthUser()
    }, [])

    return (
        <Header isAuth={props.isAuth} login={props.login} />
    );
};



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);