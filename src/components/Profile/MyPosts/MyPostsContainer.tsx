import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reduce";
import MyPosts from "./MyPosts";
import {postType} from "../../../redux/state";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MyPostsContainerType = {
   posts: Array<postType>
}

type MapDispatchToPropsType = {
    addPost: () => void;
    changeNewText: (text:string) => void;
}

let mapStateToProps = (state:AppStateType):MyPostsContainerType =>{
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType =>{
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewText: (text:string) => {
            dispatch( changeNewTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)

export default MyPostsContainer

