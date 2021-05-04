import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profile: any,
    status: string,
    updateStatus: string
}

const Profile = (props:ProfileType) => {
    return <div>
        <ProfileInfo profile ={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}

        />
        <MyPostsContainer />
    </div>
}
export default Profile

