import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../Reducers/AuthReducer";
import { DialogsReducer } from "../Reducers/DialogsReducer";
import { ProfileReducer } from "../Reducers/ProfileReducer";
import { usersReducer } from "../Reducers/UsersReducer";
import thunkMiddleware from "redux-thunk"
import { appReducer } from "../Reducers/AppReducer";


const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store;