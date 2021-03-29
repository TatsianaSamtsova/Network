import React from 'react';
import {sendMessageAC, updateNewMassageBodyAC} from "../../redux/dialogs-reduce"
import Dialogs from "./Dialogs";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {dialogType, messageType} from "../../redux/state";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
    newMessageBody: string
}

type MapDispatchToPropsType = {
    updateNewMassageBody: (body:string) => void;
    sendMessage: () => void;
}

let mapStateToProps= (state:AppStateType):MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps= (dispatch:Dispatch):MapDispatchToPropsType => {
 return {
     updateNewMassageBody: (body:string) => {
         dispatch(updateNewMassageBodyAC(body))
     },
     sendMessage: () => {
         dispatch(sendMessageAC())
     }
 }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer