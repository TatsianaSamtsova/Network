import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogType, messageType,} from "../../redux/state";
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
    updateNewMassageBody:(body:string)=> void
    sendMessage: () => void
    messages: Array<messageType>
    dialogs: Array<dialogType>
    newMessageBody: string
    isAuth: boolean

}

const Dialogs =(props:DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)

    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

    let newMessageBody = props.newMessageBody

    let onSendMessageClick =() => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
       props.updateNewMassageBody(body)
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