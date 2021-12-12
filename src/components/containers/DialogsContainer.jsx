import React from 'react';
import { connect } from 'react-redux';
import Dialogs from '../Dialogs/Dialogs';
import { addNewMessage } from '../../action/actionCreators';
import withNavigateToLogin from '../../HOC/withNavigateToLogin';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}


export default compose(
    connect(mapStateToProps, { addNewMessage }),
    withNavigateToLogin
)(Dialogs)