import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reduce";
import MyPosts from "./MyPosts";
import {storeType} from "../../../redux/state";

type MyPostsContainerType = {
    store: storeType
}

const MyPostsContainer = (props:MyPostsContainerType) => {

    let state= props.store.getState()

       let addPost = () =>{
       props.store.dispatch(addPostAC())

    }

       let onPostChange = (text:string) =>{
         props.store.dispatch( changeNewTextAC(text))

    }
    return (<MyPosts addPost={addPost}
                     changeNewText = {onPostChange}
                     posts={state.profilePage.posts}

    /> )
}
export default MyPostsContainer

