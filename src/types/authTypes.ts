import { SET_AUTH_DATA } from "../action/actionCreators"

export type AuthState = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type SetAuthDataAction = {
    type: typeof SET_AUTH_DATA,
    payload: { id: number | null, login: string | null, email: string | null, isAuth: boolean }
}


export type AuthActionTypes = SetAuthDataAction