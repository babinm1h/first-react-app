import { ADD_POST, CHANGE_PHOTO, DELETE_POST, PROFILE_IS_LOADING, SET_STATUS, SET_USER_PROFILE } from "../action/actionCreators"

export type PostType = {
    id: number,
    text: string,
    likes: number
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}


export type AddPostActionType = {
    type: typeof ADD_POST
    payload: string
}
export type setProfileActionType = {
    type: typeof SET_USER_PROFILE
    payload: ProfileType
}
export type setStatusActionType = {
    type: typeof SET_STATUS
    payload: string
}
export type deletePostActionType = {
    type: typeof DELETE_POST
    payload: number
}
export type setProfileLoadingActionType = {
    type: typeof PROFILE_IS_LOADING
    payload: boolean
}
export type changePhotoActionType = {
    type: typeof CHANGE_PHOTO
    payload: PhotosType
}


export type ProfileActionTypes =
    changePhotoActionType | setProfileLoadingActionType | deletePostActionType | setStatusActionType | setProfileActionType | AddPostActionType