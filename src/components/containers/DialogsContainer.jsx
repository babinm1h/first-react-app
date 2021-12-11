import React from 'react';
import { connect } from 'react-redux';
import Dialogs from '../Dialogs/Dialogs';
import { addNewMessage } from '../../action/actionCreators';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,
    { addNewMessage }
)(Dialogs);