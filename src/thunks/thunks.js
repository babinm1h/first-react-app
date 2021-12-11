import { toggleFollowingProgress, setIsLoading, setTotalCount, setUsers, followSuccess, unfollowSuccess, setProfile, setAuthData } from "../action/actionCreators"
import { authApi } from "../API/authApi"
import { profileApi } from "../API/profileApi"
import { usersAPI } from "../API/usersApi"



// thunks for usersPage
export const getUsers = (currentPage, pageSize) => {
    setIsLoading(true)
    return async (dispatch) => {
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        dispatch(setTotalCount(response.totalCount = 77))
        dispatch(setIsLoading(false))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}


// thunks for profilePage
export const setUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.setProfile(userId)
        dispatch(setProfile(response))
    }
}


// thunks for auth
export const getAuthUser = () => {
    return async (dispatch) => {
        let response = await authApi.getAuth()
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setAuthData(id, login, email))
        }
    }
}



