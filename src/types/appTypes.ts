import { SET_INITIALIZE } from "../action/actionCreators"

export type AppState = {
    initialized: boolean
}

export type SetInitializeAction = {
    type: typeof SET_INITIALIZE
}

export type AppActionTypes = SetInitializeAction