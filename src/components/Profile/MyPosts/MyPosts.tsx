import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile";

const MyPosts = (props: ProfilePropsType) => {
    const [value, setValue] = useState("")
    let postsElements = props.posts.map( p => <Post id ={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () =>{
       props.dispatch({type: "ADD-POST", postMessage: props.message })
       setValue("")
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let text = e.currentTarget.value
        props.dispatch( {type: "CHANGE-NEW-TEXT", newText: text})
        setValue(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={value} ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts

