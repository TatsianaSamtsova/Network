
import {ActionsTypes, postType, profilePageType} from "./state";


let initialState: profilePageType = {

        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post.", likesCount: 11}
        ],
        newPostText: ""
    }


const  profileReducer = ( state: profilePageType = initialState, action: ActionsTypes) => {
switch (action.type) {
    case "ADD-POST":
        let newPost: postType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = "";
        return state;
    case "CHANGE-NEW-TEXT":
        state.newPostText = action.newText
        return state
    default:
        return state
}
}
export const addPostAC = (message: string) => {
    return {type: "ADD-POST", postMessage: message } as const
}
export const changeNewTextAC = (text: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: text} as const
}

export default profileReducer