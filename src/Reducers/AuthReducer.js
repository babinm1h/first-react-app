import { SET_AUTH_DATA } from "../action/actionCreators"


let initialState = {
    id: '',
    login: '',
    email: '',
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}