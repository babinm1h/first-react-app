import { SET_AUTH_DATA } from "../action/actionCreators"
import { AuthActionTypes, AuthState } from "../types/authTypes"


let initialState: AuthState = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}


export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
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