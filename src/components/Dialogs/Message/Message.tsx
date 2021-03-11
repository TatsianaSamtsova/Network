import React from 'react';
import s from './../Dialogs.module.css';
import {messageType} from "../../../redux/state";


const Message = (props:messageType) => {
    return (
        <div className={s.message}> {props.message}</div>
    )
}
export default Message