import { createStore, combineReducers } from "redux";
import { DialogsReducer } from "../Reducers/DialogsReducer";
import { ProfileReducer } from "../Reducers/ProfileReducer";


const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
})



const store = createStore(reducers)


export default store;