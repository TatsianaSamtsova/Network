import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reduce";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


type MapStateToPropsType ={
    profile: any
}
type MapDispatchToProps = {
    setUserProfile: (profile: any) => void
}
type PathParamType ={
    userId: string
}
type ProfileContainerType = MapDispatchToProps & MapStateToPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerType



class ProfileContainer extends  React.Component<PropsType> {

    componentDidMount() {


        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
         return (
             <div>
                <Profile {...this.props} profile={this.props.profile} />
             </div>
         )
    }
}let mapStateToProps =(state: AppStateType) : MapStateToPropsType => ({
        profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default  connect(mapStateToProps, {
    setUserProfile: setUserProfileAC} ) (WithUrlDataContainerComponent)