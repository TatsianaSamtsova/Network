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
import store, {storeType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";

export type AppPropsType ={
        store: Store
        dispatch: (action: any) => void

}
function App (props:AppPropsType) {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() =>
                    <DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
                <Route path={"/profile"} render={() =>
                    <Profile store={store}/>}/>
                <Route path={"/music"} render={() => <Music />}/>
                <Route path={"/news"} render={() => <News />}/>
                <Route path={"/setting"} render={() => <Setting />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
