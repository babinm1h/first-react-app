// constants
//dialogs
export const ADD_MESSAGE = "ADD_MESSAGE"

//profile
export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE"

//users
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const IS_LOADING = "IS_LOADING"



// action creators
// profile actions
export const addNewMessage = (message) => ({ type: ADD_MESSAGE, payload: message })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile })

// dialogs actions
export const addNewPost = (text) => ({ type: ADD_POST, payload: text })

// users actions
export const follow = (userId) => ({ type: FOLLOW, payload: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, payload: userId })
export const setUsers = (users) => ({ type: SET_USERS, payload: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: totalCount })
export const setIsLoading = (isLoading) => ({ type: IS_LOADING, payload: isLoading })