import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPageAC,
    toggleIsFollowingAC,
    unfollow,
    userType
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingInProgress: number [],
    isFetching: boolean



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
    getUsers: (currentPage: number,pageSize: number)=> void,

}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize )
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
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}




export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setCurrentPage: setCurrentPageAC,
        toggleIsFollowing: toggleIsFollowingAC,
        getUsers: getUsersThunkCreator
    })
)(UsersContainer)