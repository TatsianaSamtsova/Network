import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})
let store = createStore(reducers)

export default store