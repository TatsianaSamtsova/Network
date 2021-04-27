import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    toggleIsFollowingAC,
    unfollowAC,
    userType
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number []


}

type UsersContainerPropsType = {
    users: Array<userType>,
    pageSize: number,
    isFetching: boolean,
    currentPage: number,
    totalUsersCount: number,
    followingInProgress: number[],
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<userType>) => void,
    onPageChanged?: (pageNumber: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) =>void,
    toggleIsFollowing: (followingInProgress: boolean, userID: number) => void,


}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
               this.props.toggleIsFetching(false)
               this.props.setUsers(data.items)
               this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);

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
                         toggleIsFollowing={this.props.toggleIsFollowing}
                         followingInProgress={this.props.followingInProgress}


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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



const UserContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFollowing: toggleIsFollowingAC
})(UsersContainer)

export default UserContainer