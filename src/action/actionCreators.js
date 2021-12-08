// constants
export const ADD_MESSAGE = "ADD_MESSAGE"
export const ADD_POST = "ADD_POST";






// action creators
// profile actions
export const addNewMessage = (message) => ({ type: ADD_MESSAGE, payload: message })

// dialogs actions
export const addNewPost = (text) => {
    return { type: ADD_POST, payload: text }
}
