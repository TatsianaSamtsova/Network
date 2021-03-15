import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import store from "./redux/state";


const rerenderEntireTree = () => {
    const state = store.getState();
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsPage={state.dialogsPage}
                 profilePage={state.profilePage}
                 dispatch={store.dispatch.bind(store) }
                             />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
