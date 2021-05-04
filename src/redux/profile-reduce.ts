import {ActionsTypes, postType, profilePageType} from "./state";
import {ProfileType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


let initialState: profilePageType = {

    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 11}
    ],
    newPostText: "",
    profile: {},
    status: ""
}


const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: postType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                newPostText: "",
                posts: [...state.posts,newPost]
            }
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET_STATUS": {
            return {...state, status: action.status}
        }

default:
    return state
}
}
export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const changeNewTextAC = (text: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: text} as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: "SET_USER_PROFILE", profile} as const
}
export const setStatusAC = (status: string) => {
    return {type: "SET_STATUS", status} as const
}
export const getProfile = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })

    }
}
export const getStatus = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusAC(data))
        })

    }
}
export const updateStatus = (status: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0){
            dispatch(setStatusAC(status))}
        })

    }
}
export default profileReducer