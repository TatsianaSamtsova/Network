let onChange = () => {
    console.log("Hello")
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}
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
export let state: RootStateType = {

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
}

export const addPost = (postMessage: string) => {
    const newPost: postType ={ id: new Date().getTime(), message: postMessage, likesCount: 0  }
    state.profilePage.posts.push(newPost)
    onChange()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}

export default state;