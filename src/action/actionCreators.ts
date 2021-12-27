import { SetInitializeAction } from "../types/appTypes";
import { SetAuthDataAction } from "../types/authTypes";
import { addNewMessageAction } from "../types/dialogsTypes";
import { AddPostActionType, changePhotoActionType, deletePostActionType, PhotosType, ProfileType, setProfileActionType, setProfileLoadingActionType, setStatusActionType } from "../types/profileTypes";
import { followSuccessActionType, setCurrentPageActionType, setIsLoadingActionType, setTotalCountActionType, setUsersActionType, toggleFollowingProgressActionType, unfollowSuccessActionType, UserType } from "../types/usersTypes";


// CONSTANTS
//dialogs
export const ADD_MESSAGE = "dialogsPage/ADD_MESSAGE"

//profile
export const ADD_POST = "profilePage/ADD_POST";
export const SET_USER_PROFILE = "profilePage/SET_USER_PROFILE"
export const SET_STATUS = "profilePage/SET_STATUS"
export const DELETE_POST = "profilePage/DELETE_POST"
export const PROFILE_IS_LOADING = "profilePage/PROFILE_IS_LOADING"
export const CHANGE_PHOTO = "CHANGE_PHOTO"
export const SET_ERROR = "SET_ERROR"

//users
export const FOLLOW = "usersPage/FOLLOW"
export const UNFOLLOW = "usersPage/UNFOLLOW"
export const SET_USERS = "usersPage/SET_USERS"
export const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "usersPage/SET_TOTAL_USERS_COUNT"
export const IS_LOADING = "usersPage/IS_LOADING"
export const FOLLOW_IN_PROGRESS = "usersPage/FOLLOW_IN_PROGRESS"

// auth
export const SET_AUTH_DATA = "auth/SET_AUTH_DATA"

// app
export const SET_INITIALIZE = 'app/SET_INITIALIZE'



// ACTION CREATORS
// profile actions
export const addNewPost = (text: string): AddPostActionType => ({ type: ADD_POST, payload: text })
export const setProfile = (profile: ProfileType): setProfileActionType => ({ type: SET_USER_PROFILE, payload: profile })
export const setStatus = (status: string): setStatusActionType => ({ type: SET_STATUS, payload: status })
export const deletePost = (post: number): deletePostActionType => ({ type: DELETE_POST, payload: post })
export const setProfileLoading = (isLoading: boolean): setProfileLoadingActionType => ({ type: PROFILE_IS_LOADING, payload: isLoading })
export const changePhoto = (photos: PhotosType): changePhotoActionType => ({ type: CHANGE_PHOTO, payload: photos })


// dialogs actions
export const addNewMessage = (message: string): addNewMessageAction => ({ type: ADD_MESSAGE, payload: message })


// users actions
export const followSuccess = (userId: number): followSuccessActionType => ({ type: FOLLOW, payload: userId })
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({ type: UNFOLLOW, payload: userId })
export const setUsers = (users: UserType[]): setUsersActionType => ({ type: SET_USERS, payload: users })
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, payload: currentPage })
export const setTotalCount = (totalCount: number): setTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, payload: totalCount })
export const setIsLoading = (isLoading: boolean): setIsLoadingActionType => ({ type: IS_LOADING, payload: isLoading })
export const toggleFollowingProgress = (inProgress: boolean, id: number): toggleFollowingProgressActionType => ({ type: FOLLOW_IN_PROGRESS, payload: inProgress, id })


// auth actions
export const setAuthData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthDataAction => ({ type: SET_AUTH_DATA, payload: { id, login, email, isAuth } })


// App actions
export const setInitialize = (): SetInitializeAction => ({ type: SET_INITIALIZE, })
