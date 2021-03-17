import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    dialogType,
    messageType,} from "../../redux/state";
import {sendMessageAC,
    updateNewMassageBodyAC} from "../../redux/dialogs-reduce"

type DialogsPropsType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs =(props:DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    let newMessageBody = props.newMessageBody

    let onSendMessageClick =() => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
       props.dispatch(updateNewMassageBodyAC(body))
    }
   return (
       <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               {dialogsElements}
            </div>
           <div className={s.messages}>
              <div> {messagesElements}</div>
               <div>
                   <div><textarea value={newMessageBody}
                                  placeholder={"Enter your message"}
                                  onChange={onNewMessageChange}></textarea></div>
                   <div><button onClick={onSendMessageClick}>Send</button></div>
               </div>
           </div>
       </div>

   )
}

export default Dialogs