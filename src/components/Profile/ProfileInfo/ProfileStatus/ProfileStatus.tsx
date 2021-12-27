import React, { ChangeEvent } from 'react';
import { BsFillPencilFill } from "react-icons/bs"
import MyInput from '../../../common/MyInput';

export type ProfileStatusProps = {
    updateStatus: (status: string) => any
    status: string
}

const ProfileStatus: React.FC<ProfileStatusProps> = ({ updateStatus, ...props }) => {

    const [editMode, setEditMode] = React.useState<boolean>(false)
    const [status, setStatus] = React.useState<string>(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    React.useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        editMode
            ? <div className="profile-status">
                <div className="profile-status_input">
                    <MyInput value={status}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange} />
                </div>
            </div>
            : <div className="profile-status">
                <span className="profile-status_text">{props.status || "Установить статус"}</span>
                <span className="profile-status_icon" onClick={activateEditMode} >
                    <BsFillPencilFill size={15} />
                </span>
            </div>

    );
};

export default ProfileStatus;