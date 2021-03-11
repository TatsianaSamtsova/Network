import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {dialogPageType, postType, profilePageType} from "../../redux/state";


export type ProfilePropsType = {

    posts: Array<postType>
    addPost: (postMessage: string) => void
    updateNewPostText:(newText: string)=>void
}

const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>
    </div>
}
export default Profile

