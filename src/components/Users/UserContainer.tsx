import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    userType
} from "../../redux/users-reduce";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/spinning-circles.svg"
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}

type MapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<userType>) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) =>void;
}

type UsersContainerPropsType = {
    users: Array<userType>,
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<userType>) => void;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    toggleIsFetching: (isFetching: boolean) =>void;
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    onPageChanged?: (pageNumber: number) => void

}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
               this.props.toggleIsFetching(false)
               this.props.setUsers(response.data.items)
               this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);

        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onPageChanged={this.onPageChanged}
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}

        />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UserContainer