import React from 'react';
import { DialogType } from '../../../types/dialogsTypes';
import DialogsItem from './DialogsItem/DialogsItem';


type MyDialogsProps = {
    dialogs: DialogType[]
}

const MyDialogs: React.FC<MyDialogsProps> = ({ dialogs }) => {

    const dialogsItems = dialogs.map(d => <DialogsItem name={d.name} key={d.id} />)

    return (
        <div className="dialogs_column">
            <div className="dialogs-users">

                {dialogsItems}

            </div>
        </div>
    );
};

export default MyDialogs;