import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lVMYpiDk-drVcQ8JT33JcNTdb2ra8sqvdA&usqp=CAU"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava
            </div>
        </div>
    )
}
export default ProfileInfo

