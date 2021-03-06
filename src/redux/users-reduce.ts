import {ActionsTypes} from "./state";
import {followAPI, profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

export type userType = {

    id: number,
    photos: {small: string, large: string},
    followed: boolean,
    name: string,
    status: string,
    location: {city: string, country: string },
}

export type usersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number []
}

let initialState: usersType = {

    users: [
        // {id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHy6K1VRLCY6d4cY31DIqQbEFwd0I8aPFvQ&usqp=CAU",
        //     followed: true, fullname: "Tom", status: "I'm a cat", location:{city: "Minsk", country: "Belarus" }},
        // {id: 2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC6h3vf_pKaavBbPwb459hJcO01ZALRTpNQ&usqp=CAU",
        //     followed: false, fullname: "Voody", status: "I'm a dog", location:{city: "Berlin", country: "Germany" }},
        // {id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpUZ7SiULyk_hhRPmd4P0yKtwhOUdI1wMlg&usqp=CAU",
        //     followed: true, fullname: "Jerry", status: "I'm a mouse", location:{city: "Kiev", country: "Ukraine" }},

    ],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []


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
                ...state, users:action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

default:
    return state
}
}
export const followSuccessAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowSuccessAC = (userID: number) => {
    return {type: "UNFOLLOW",userID} as const
}
export const setUsersAC = (users: any) => {
    return {type: "SET_USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: "SET_TOTAL_USERS_COUNT", totalCount: totalUsersCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}
export const toggleIsFollowingAC = (followingInProgress: boolean, userId: number) => {
    return {type: "TOGGLE_IS_FOLLOWING_PROGRESS", followingInProgress, userId} as const
}

export const getUsersThunkCreator = (currentPage: number,pageSize: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingAC(true))

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
    }
}

export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFollowingAC(true,userId));
        followAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccessAC(userId))
            }
            dispatch(toggleIsFollowingAC(false, userId));
        })
    }
}
export const unfollow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true,userId));
        followAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccessAC(userId))
            }
            dispatch(toggleIsFollowingAC(false, userId));
        })

        }
}

export default usersReducer