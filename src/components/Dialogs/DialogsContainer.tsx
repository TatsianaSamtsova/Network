import React from 'react';
import {sendMessageAC, updateNewMassageBodyAC} from "../../redux/dialogs-reduce"
import Dialogs from "./Dialogs";
import {Store} from "redux";


type PropsType = {
    store: Store
    dispatch: (action: any) => void
}

const DialogsContainer =(props:PropsType) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick =() => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body:string) => {
        props.dispatch(updateNewMassageBodyAC(body))
    }
   return (
       <Dialogs updateNewMassageBody={onNewMessageChange} sendMessage ={onSendMessageClick}
                dialogs={state.dialogs} messages={state.messages} newMessageBody={state.newMessageBody}/>

   )
}

export default DialogsContainer