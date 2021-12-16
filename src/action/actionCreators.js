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
export const addNewPost = (text) => ({ type: ADD_POST, payload: text })
export const setProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile })
export const setStatus = (status) => ({ type: SET_STATUS, payload: status })
export const deletePost = (post) => ({ type: DELETE_POST, payload: post })
export const setProfileLoading = (isLoading) => ({ type: PROFILE_IS_LOADING, payload: isLoading })
export const changePhoto = (photos) => ({ type: CHANGE_PHOTO, payload: photos })

// dialogs actions
export const addNewMessage = (message) => ({ type: ADD_MESSAGE, payload: message })

// users actions
export const followSuccess = (userId) => ({ type: FOLLOW, payload: userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, payload: userId })
export const setUsers = (users) => ({ type: SET_USERS, payload: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: totalCount })
export const setIsLoading = (isLoading) => ({ type: IS_LOADING, payload: isLoading })
export const toggleFollowingProgress = (inProgress, id) => ({ type: FOLLOW_IN_PROGRESS, payload: inProgress, id })

// auth actions
export const setAuthData = (id, login, email, isAuth) => ({ type: SET_AUTH_DATA, payload: { id, login, email, isAuth } })



// App actions
export const setInitialize = () => ({ type: SET_INITIALIZE, })
