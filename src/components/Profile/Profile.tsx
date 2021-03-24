import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {storeType} from "../../redux/state";

export type ProfileType = {
    store: storeType
}

const Profile = (props:ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile

