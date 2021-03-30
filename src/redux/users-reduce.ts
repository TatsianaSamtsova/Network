import {ActionsTypes} from "./state";

export type userType = {

    id: number,
    photoUrl: string,
    followed: boolean,
    fullname: string,
    status: string,
    location: {city: string, country: string },
}

export type usersType = {
    users: Array<userType>
}

let initialState: usersType = {

    users: [
        {id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHy6K1VRLCY6d4cY31DIqQbEFwd0I8aPFvQ&usqp=CAU",
            followed: true, fullname: "Tom", status: "I'm a cat", location:{city: "Minsk", country: "Belarus" }},
        {id: 2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC6h3vf_pKaavBbPwb459hJcO01ZALRTpNQ&usqp=CAU",
            followed: false, fullname: "Voody", status: "I'm a dog", location:{city: "Berlin", country: "Germany" }},
        {id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpUZ7SiULyk_hhRPmd4P0yKtwhOUdI1wMlg&usqp=CAU",
            followed: true, fullname: "Jerry", status: "I'm a mouse", location:{city: "Kiev", country: "Ukraine" }},

    ],

}

const usersReducer = (state:usersType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u
                })

            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state, users: [ ...state.users, ...action.users]
            }

default:
    return state
}
}
export const followAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW",userID} as const
}
export const setUsersAC = (users: any) => {
    return {type: "SET_USERS", users} as const
}

export default usersReducer