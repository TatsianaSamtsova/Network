import React from 'react';
import './App.css';
import Header from "./components/Header/HeaderNew";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {dialogPageType, profilePageType, RootStateType} from "./redux/state";

export type AppPropsType ={
    dialogsPage: dialogPageType
    profilePage: profilePageType
    addPost:(postMessage: string)=>void
    updateNewPostText:(newText: string)=>void

}
function App (props:AppPropsType) {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() =>
                    <Dialogs dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages}/>}/>
                <Route path={"/profile"} render={() =>
                    <Profile posts={props.profilePage.posts}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}
                    />}/>
                <Route path={"/music"} render={() => <Music />}/>
                <Route path={"/news"} render={() => <News />}/>
                <Route path={"/setting"} render={() => <Setting />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
