import { SET_INITIALIZE } from "../action/actionCreators"
import { AppActionTypes, AppState } from "../types/appTypes"

let initialState: AppState = {
    initialized: false
}



export const appReducer = (state = initialState, action: AppActionTypes): AppState => {
    switch (action.type) {

        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

