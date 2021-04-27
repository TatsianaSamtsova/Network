import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import usersReducer from "./users-reduce";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type ReducersType = typeof reducers
export  type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store