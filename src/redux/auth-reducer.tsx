import {ActionsTypes} from "./state";

export type authType = {

    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}



let initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false


}

const authReducer = (state:authType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
             ...action.data,
                isAuth: true

            }

        default:
            return state
    }
}

export const setUserDataAC = (userId: number, email:string, login: string) => {
    return {type: "SET_USER_DATA", data: {userId, email, login}} as const
}


export default authReducer