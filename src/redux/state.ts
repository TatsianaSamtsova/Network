
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



export type storeType = {
    _state: RootStateType,
    updateNewPostText: (newText: string) => void,
    addPost:(postMessage: string) => void,
    _onChange: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType,
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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost(postMessage: string) {
        const newPost: postType = {id: new Date().getTime(), message: postMessage, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._onChange()
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
}

    export default store;