import React from 'react';
import {sendMessageAC, updateNewMassageBodyAC} from "../../redux/dialogs-reduce"
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {dialogType, messageType} from "../../redux/state";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
        newMessageBody: state.dialogsPage.newMessageBody,

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

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



