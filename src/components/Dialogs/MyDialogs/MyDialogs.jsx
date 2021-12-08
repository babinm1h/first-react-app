import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';



const MyDialogs = ({ dialogs }) => {

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