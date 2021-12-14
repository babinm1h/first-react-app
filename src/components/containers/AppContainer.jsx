import React from 'react';
import { connect } from 'react-redux';
import { getAuthUser, initializeApp } from '../../thunks/thunks';
import App from '../../App';
import Preloader from '../common/Preloader/Preloader';


const AppMainContainer = (props) => {

    React.useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        return <Preloader />
    }

    return (
        <App {...props} />
    );
};

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, { getAuthUser, initializeApp })(AppMainContainer);