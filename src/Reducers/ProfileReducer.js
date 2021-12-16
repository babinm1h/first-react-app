import { ADD_POST, SET_USER_PROFILE, SET_STATUS, DELETE_POST, PROFILE_IS_LOADING, CHANGE_PHOTO, } from "../action/actionCreators"


let initialState = {
    posts: [
        { id: 1, text: "Good luck!", likes: 777 },
        { id: 2, text: "Some text 123", likes: 10 },
        { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing.", likes: 27 },
    ],

    profile: "",
    status: "",
    profileIsLoading: false,
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = { id: Date.now(), text: action.payload, likes: 0 }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            }

        case SET_USER_PROFILE:
            return { ...state, profile: action.payload }

        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }

        case PROFILE_IS_LOADING:
            return {
                ...state,
                profileIsLoading: action.payload
            }

        case CHANGE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.payload }
            }

        default:
            return state
    }
}




