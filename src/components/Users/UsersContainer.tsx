import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reduce";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,

}

type MapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<userType>) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

let mapStateToProps= (state:AppStateType):MapStateToPropsType => {
    return {
       users: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer