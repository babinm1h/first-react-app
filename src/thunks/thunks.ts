import { toggleFollowingProgress, setIsLoading, setTotalCount, setUsers, followSuccess, unfollowSuccess, setProfile, setAuthData, setStatus, setInitialize, changePhoto } from "../action/actionCreators"
import { authApi } from "../API/authApi"
import { profileApi } from "../API/profileApi"
import { usersAPI } from "../API/usersApi"
import { setProfileLoading } from "../action/actionCreators"
import { Dispatch } from "react"
import { UsersActionTypes } from "../types/usersTypes"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../redux/store"
import { ProfileActionTypes, ProfileType } from "../types/profileTypes"
import { AuthActionTypes } from "../types/authTypes"
import { ResultCodeEnum } from "../API/instance"

type UsersDispatchType = Dispatch<UsersActionTypes>
type UsersThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersActionTypes>

type ProfileDispatchType = Dispatch<ProfileActionTypes>
type ProfileThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionTypes>

type AuthDispatchType = Dispatch<AuthActionTypes>




// thunks for usersPage
export const getUsers = (currentPage: number, pageSize: number): UsersThunkType => {
    setIsLoading(true)
    return async (dispatch: UsersDispatchType) => {
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        dispatch(setTotalCount(response.totalCount))
        dispatch(setIsLoading(false))
    }
}

export const follow = (userId: number): UsersThunkType => {
    return async (dispatch: UsersDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId: number): UsersThunkType => {
    return async (dispatch: UsersDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}


// thunks for profilePage
export const setUserProfile = (userId: number): ProfileThunkType => {
    return async (dispatch: ProfileDispatchType) => {
        dispatch(setProfileLoading(true))
        let response = await profileApi.setProfile(userId)
        dispatch(setProfile(response))
        dispatch(setProfileLoading(false))
    }
}

export const updateStatus = (status: string): ProfileThunkType => {
    return async (dispatch: ProfileDispatchType) => {
        let response = await profileApi.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const getStatus = (id: number): ProfileThunkType => {
    return async (dispatch: ProfileDispatchType) => {
        try {
            let response = await profileApi.getStatus(id)
            dispatch(setStatus(response.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}


export const savePhoto = (img: any): ProfileThunkType => async (dispatch: ProfileDispatchType) => {
    let response = await profileApi.savePhoto(img);
    if (response.data.resultCode === 0) {
        dispatch(changePhoto(response.data.data.photos))
    }
}


export const saveProfileData = (profile: ProfileType): ProfileThunkType => {
    return async (dispatch: ProfileDispatchType) => {
        let response = await profileApi.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(setProfile(profile))
            console.log(profile)
        }
    }
}


// thunks for auth
export const getAuthUser = () => {
    return (dispatch: AuthDispatchType) => {
        return authApi.authMe()
            .then(response => {
                if (response.data.resultCode === ResultCodeEnum.Success) {
                    let { id, login, email, } = response.data.data
                    dispatch(setAuthData(id, login, email, true))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUser())
        }
    }
}


export const logout = () => {
    return async (dispatch: AuthDispatchType) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}



// thunks for App
export const initializeApp = () => {
    return (dispatch: any) => {
        const promise = dispatch(getAuthUser())

        Promise.all([promise])
            .then(() => {
                dispatch(setInitialize())
            })
    }
}