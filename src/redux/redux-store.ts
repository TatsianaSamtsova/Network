import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import usersReducer from "./users-reduce";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

type ReducersType = typeof reducers
export  type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers)

export default store