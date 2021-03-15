import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postType} from "../../redux/state";


export type ProfilePropsType = {
    message: string;
    posts: Array<postType>
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} message={props.message} dispatch={props.dispatch}/>
    </div>
}
export default Profile

