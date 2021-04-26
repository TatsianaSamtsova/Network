import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export type AppPropsType ={
        store: Store
        dispatch: (action: any) => void

}
function App (props:AppPropsType) {


    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() =>
                    <DialogsContainer />}/>
                <Route path={"/profile/:userId?"} render={() =>
                    <ProfileContainer />}/>
                <Route path={"/music"} render={() => <Music />}/>
                <Route path={"/news"} render={() => <News />}/>
                <Route path={"/setting"} render={() => <Setting />}/>
                <Route path={"/users"} render={() => <UserContainer/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
