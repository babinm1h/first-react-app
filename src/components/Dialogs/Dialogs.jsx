import React from 'react';
import { Navigate } from 'react-router';
import "./Dialogs.scss"
import Messages from './Messages/Messages';
import MyDialogs from './MyDialogs/MyDialogs';




const Dialogs = (props) => {

    return (
        <div className="dialogs">
            <div className="dialogs_row">

                <MyDialogs dialogs={props.dialogs} />
                <Messages messages={props.messages} addNewMessage={props.addNewMessage} />

            </div>
        </div>
    );
};

export default Dialogs;