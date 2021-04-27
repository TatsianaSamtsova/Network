import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, setUserProfileAC} from "../../redux/profile-reduce";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type MapStateToPropsType ={
    profile: any
}
type MapDispatchToProps = {
    setUserProfile: (profile: any) => void,
    getProfile:(userId: string) => void
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
        this.props.getProfile(userId)
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
    setUserProfile: setUserProfileAC, getProfile
} ) (WithUrlDataContainerComponent)