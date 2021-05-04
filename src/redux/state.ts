import profileReducer, {addPostAC, changeNewTextAC, setStatusAC, setUserProfileAC} from "./profile-reduce";
import dialogsReducer, {sendMessageAC, updateNewMassageBodyAC} from "./dialogs-reduce";
import {
    followSuccessAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingAC,
    unfollowSuccessAC
} from "./users-reduce";
import { setUserDataAC } from "./auth-reducer";

export type messageType ={
    id: number
    message: string
}
export type dialogType ={
    id: number
    name: string
}
export type postType ={
    id: number
    message: string
    likesCount: number
}

export type profilePageType ={
    posts: Array<postType>
    newPostText: string
    profile: any,
    status: string


}
export type dialogPageType ={
    messages: Array<messageType>
    dialogs: Array<dialogType>
    newMessageBody: string
}

export type RootStateType ={
    profilePage: profilePageType
    dialogsPage: dialogPageType

}

export type ActionsTypes =  ReturnType<typeof addPostAC>  | ReturnType<typeof sendMessageAC> |
    ReturnType<typeof changeNewTextAC> |    ReturnType<typeof updateNewMassageBodyAC> |
    ReturnType<typeof followSuccessAC> | ReturnType<typeof unfollowSuccessAC> | ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> | ReturnType<typeof  setTotalUsersCountAC> |
    ReturnType<typeof toggleIsFetchingAC> | ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setUserDataAC> | ReturnType<typeof toggleIsFollowingAC> |
    ReturnType<typeof setStatusAC>

export type storeType = {
    _state: RootStateType,
    _onChange: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsTypes) => void
  }

const  store: storeType = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post.", likesCount: 11}
            ],
            newPostText: "",
            profile: null,
            status: ""
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Bye"},
                {id: 3, message: "yo"}
            ],
            dialogs: [
                {id: 1, name: "Tanya"},
                {id: 2, name: "Max"},
                {id: 3, name: "Olha"},
                {id: 4, name: "Nastya"},
                {id: 5, name: "Dasha"},
                {id: 6, name: "Igor"},
            ],
            newMessageBody: ""
        }
    },
    _onChange() {
        console.log("State changed")
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage , action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action)

        this._onChange()}
}
    export default store;