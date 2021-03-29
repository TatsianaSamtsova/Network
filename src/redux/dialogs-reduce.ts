import {ActionsTypes, dialogPageType} from "./state";

let initialState: dialogPageType = {
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

const dialogsReducer = (state: dialogPageType = initialState, action: ActionsTypes) => {
        switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            }
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            return {
                ...state,
               newMessageBody: "",
               messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state
    }
}

export const updateNewMassageBodyAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body: body} as const
}
export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"} as const
}
export default dialogsReducer