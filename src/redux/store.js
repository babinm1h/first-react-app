import { createStore, combineReducers } from "redux";
import { DialogsReducer } from "../Reducers/DialogsReducer";
import { ProfileReducer } from "../Reducers/ProfileReducer";
import { usersReducer } from "../Reducers/UsersReducer";


const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: usersReducer,
})



const store = createStore(reducers)


export default store;