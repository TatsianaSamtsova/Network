import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogPageType} from "../../redux/state";


const Dialogs =(props:dialogPageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

   return (
       <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               {dialogsElements}
            </div>
           <div className={s.messages}>
               {messagesElements}
           </div>
       </div>

   )
}

export default Dialogs