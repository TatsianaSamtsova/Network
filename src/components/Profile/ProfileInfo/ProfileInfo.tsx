import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: any) => {
    if (!props.profile.photos){
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lVMYpiDk-drVcQ8JT33JcNTdb2ra8sqvdA&usqp=CAU"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status ={props.status}
                               updateStatus = {props.updateStatus}
                />
            </div>
        </div>
    )
}
export default ProfileInfo

