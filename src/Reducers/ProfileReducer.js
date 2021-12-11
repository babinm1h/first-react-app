import { ADD_POST, SET_USER_PROFILE } from "../action/actionCreators"


let initialState = {
    posts: [
        { id: 1, text: "Good luck!", likes: 777 },
        { id: 2, text: "Some text 123", likes: 10 },
        { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing.", likes: 27 },
    ],

    profile: ""
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = { id: Date.now(), text: action.payload, likes: 0 }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return { ...state, profile: action.payload }

        default:
            return state
    }
}




