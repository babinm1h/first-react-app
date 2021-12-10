import { FOLLOW, SET_USERS, UNFOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, IS_LOADING, } from "../action/actionCreators"


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isLoading: true
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return { ...state, users: [...action.payload] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.payload }

        case IS_LOADING:
            return { ...state, isLoading: action.payload }


        default:
            return state
    }
}

