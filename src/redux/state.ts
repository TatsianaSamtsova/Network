
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

}
export type dialogPageType ={
    messages: Array<messageType>
    dialogs: Array<dialogType>
}

export type RootStateType ={
    profilePage: profilePageType
    dialogsPage: dialogPageType

}


export type ActionsTypes =  ReturnType<typeof addPostAC>  |  ReturnType<typeof changeNewTextAC>

export type storeType = {
    _state: RootStateType,
    _onChange: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsTypes) => void
  }
export const addPostAC = (message: string) => {
    return {type: "ADD-POST", postMessage: message } as const
}
export const changeNewTextAC = (text: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: text} as const
}
const  store: storeType = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post.", likesCount: 11}
            ],
            newPostText: ""
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
        }
    },

    _onChange() {
        console.log("State changed")
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState () {
        return this._state
    },
    dispatch (action) {
        if (action.type === "ADD-POST"){
            const newPost: postType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText ,
                likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._onChange()
        } else if(action.type === "CHANGE-NEW-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this._onChange()
            }
        }
    }


    export default store;