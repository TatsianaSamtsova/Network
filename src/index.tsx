import reportWebVitals from './reportWebVitals';
import {subscribe} from "./redux/state";
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, updateNewPostText} from "./redux/state";
import App from "./App";
import state from "./redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsPage={state.dialogsPage}
                 profilePage={state.profilePage}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
