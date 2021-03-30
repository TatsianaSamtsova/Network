import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/users-reduce";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<userType>
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<userType>) => void;
}

let mapStateToProps= (state:AppStateType):MapStateToPropsType => {
    return {
       users: state.usersPage.users
    }
}

let mapDispatchToProps= (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer