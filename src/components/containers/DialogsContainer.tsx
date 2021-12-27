import { connect } from 'react-redux';
import Dialogs from '../Dialogs/Dialogs';
import { addNewMessage } from '../../action/actionCreators';
import withNavigateToLogin from '../../HOC/withNavigateToLogin';
import { compose } from 'redux';
import { DialogType } from "../../types/dialogsTypes"
import { MessageType } from '../../types/dialogsTypes'
import { AppStateType } from '../../redux/store';
import React from 'react';

type mapStateToPropsType = {
    dialogs: DialogType[],
    messages: MessageType[]
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, { addNewMessage }),
    withNavigateToLogin
)(Dialogs)