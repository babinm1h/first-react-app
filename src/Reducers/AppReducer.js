import { SET_INITIALIZE } from "../action/actionCreators"

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
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

