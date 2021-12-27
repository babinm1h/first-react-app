import { ADD_MESSAGE } from "../action/actionCreators"

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

export type addNewMessageAction = {
    type: typeof ADD_MESSAGE
    payload: string
}


export type DialogsActionTypes = addNewMessageAction