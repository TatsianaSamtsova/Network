import {ActionsTypes, dialogPageType} from "./state";

const  dialogsReducer = ( state: dialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state;

        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const updateNewMassageBodyAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body: body } as const
}
export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"} as const
}
export default dialogsReducer