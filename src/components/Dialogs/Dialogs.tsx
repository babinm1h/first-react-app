import React from 'react';
import { DialogType, MessageType } from '../../types/dialogsTypes';
import "./Dialogs.scss"
import Messages from './Messages/Messages';
import MyDialogs from './MyDialogs/MyDialogs';


type DialogsProps = {
    dialogs: DialogType[],
    messages: MessageType[],
    addNewMessage: (messsage: string) => void
}

const Dialogs: React.FC<DialogsProps> = (props) => {

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