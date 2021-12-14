import { toggleFollowingProgress, setIsLoading, setTotalCount, setUsers, followSuccess, unfollowSuccess, setProfile, setAuthData, setStatus, setInitialize } from "../action/actionCreators"
import { authApi } from "../API/authApi"
import { profileApi } from "../API/profileApi"
import { usersAPI } from "../API/usersApi"
import { setProfileLoading } from "../action/actionCreators"



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
        dispatch(setProfileLoading(true))
        let response = await profileApi.setProfile(userId)
        dispatch(setProfile(response))
        dispatch(setProfileLoading(false))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileApi.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const getStatus = (id) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(id)
        dispatch(setStatus(response.data))
    }
}


// thunks for auth
export const getAuthUser = () => {
    return (dispatch) => {
        return authApi.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email, } = response.data.data
                    dispatch(setAuthData(id, login, email, true))
                }
            })
    }
}


export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUser())
        }
    }
}


export const logout = () => {
    return async (dispatch) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}



// thunks for App
export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUser())

        Promise.all([promise])
            .then(() => {
                dispatch(setInitialize())
            })
    }
}