import React from 'react';
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


const withNavigateToLogin = (Component) => {

    const NavigateComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to="/login" />
        }

        return <Component {...props} />
    }

    let connectedWithNavigateToLogin = connect(mapStateToProps)(NavigateComponent)
    return connectedWithNavigateToLogin
};

export default withNavigateToLogin;

