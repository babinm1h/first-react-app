import { ADD_MESSAGE } from "../action/actionCreators"
import { addNewMessageAction, DialogType, MessageType } from "../types/dialogsTypes"

let initialState = {
    dialogs: [
        { id: 1, name: "Misha" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Aleksib0b" },
        { id: 4, name: "Nikola" },
        { id: 5, name: "Kovac" },
    ] as DialogType[],

    messages: [
        { id: 1, message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quaerat vero!" },
        { id: 2, message: "Have a nice day!" },
        { id: 3, message: "Message 3" },
        { id: 4, message: "Message 4" },
        { id: 5, message: "Lorem ipsum, dolor sit amet consectetur!!!" },
    ] as MessageType[],
}

export type dialogsState = typeof initialState



export const DialogsReducer = (state = initialState, action: addNewMessageAction): dialogsState => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: Date.now(),
                message: action.payload
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }


        default:
            return state
    }
}


