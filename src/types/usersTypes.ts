import { FOLLOW, FOLLOW_IN_PROGRESS, IS_LOADING, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, UNFOLLOW } from "../action/actionCreators";
import { PhotosType } from "./profileTypes";

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType,
    followed?: boolean
}

export type followSuccessActionType = {
    type: typeof FOLLOW
    payload: number
}
export type unfollowSuccessActionType = {
    type: typeof UNFOLLOW
    payload: number
}
export type setUsersActionType = {
    type: typeof SET_USERS
    payload: UserType[]
}
export type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    payload: number
}
export type setTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    payload: number
}
export type setIsLoadingActionType = {
    type: typeof IS_LOADING
    payload: boolean
}
export type toggleFollowingProgressActionType = {
    type: typeof FOLLOW_IN_PROGRESS
    payload: boolean
    id: number
}


export type UsersActionTypes =
    toggleFollowingProgressActionType | setIsLoadingActionType | setTotalCountActionType | setCurrentPageActionType | setUsersActionType | followSuccessActionType | unfollowSuccessActionType

