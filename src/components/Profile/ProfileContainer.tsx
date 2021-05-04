import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, getStatus, setStatusAC, setUserProfileAC, updateStatus} from "../../redux/profile-reduce";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStateToPropsType ={
    profile: any,
    status: string,


}
type MapDispatchToProps = {
    setUserProfile: (profile: any) => void,
    getProfile:(userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: string

}
type PathParamType ={
    userId: string,

}
type ProfileContainerType = MapDispatchToProps & MapStateToPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerType

class ProfileContainer extends  React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
         return (
                <Profile {...this.props} profile={this.props.profile}
                         status = {this.props.status}
                         updateStatus={this.props.updateStatus}
                />
         )
    }
}

let mapStateToProps =(state: AppStateType) : MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile: setUserProfileAC, getProfile,
        setStatus: setStatusAC,  getStatus, updateStatus    } ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

