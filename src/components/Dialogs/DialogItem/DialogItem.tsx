import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogType} from "../../../redux/state";



const DialogItem =(props:dialogType) => {
    let path = "/dialogs/" + props.id;
        return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}
export default DialogItem