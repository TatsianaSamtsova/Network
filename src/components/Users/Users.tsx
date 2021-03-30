import React from "react";
import s from "./Users.module.css"
import {userType} from "../../redux/users-reduce";

type UsersPropsType = {
    users: Array<userType>,
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users:Array<userType>) => void;

}

let Users = (props: UsersPropsType) => {
    if(props.users.length === 0){
    props.setUsers([
        {id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHy6K1VRLCY6d4cY31DIqQbEFwd0I8aPFvQ&usqp=CAU",
            followed: true, fullname: "Tom", status: "I'm a cat", location:{city: "Minsk", country: "Belarus" }},
        {id: 2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC6h3vf_pKaavBbPwb459hJcO01ZALRTpNQ&usqp=CAU",
            followed: false, fullname: "Voody", status: "I'm a dog", location:{city: "Berlin", country: "Germany" }},
        {id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpUZ7SiULyk_hhRPmd4P0yKtwhOUdI1wMlg&usqp=CAU",
            followed: true, fullname: "Jerry", status: "I'm a mouse", location:{city: "Kiev", country: "Ukraine" }},
    ])}
    return <div >
        {
            props.users.map( u => <div key={u.id}>
                <div className={s.user}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} />
                    </div>
                    <div className={s.buttons} >
                        {u.followed
                        ? <button className={s.button} onClick={()=>{props.unfollow(u.id)}}> Unfollow</button>
                        : <button className={s.button} onClick={()=>{props.follow(u.id)}}> Follow</button>
                        }

                    </div>
                </span>
                <span className={s.userInfo} >
                    <span className={s.text}>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span className={s.location}>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                </div>
                </div>
            )
        }
    </div>
}

export default Users