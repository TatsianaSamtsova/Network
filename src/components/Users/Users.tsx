import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/imgmen.jpg";
import {userType} from "../../redux/users-reduce";
import { NavLink } from 'react-router-dom';
import axios from "axios";

type UsersPropsType = {
    users: Array<userType>,
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void

}

let Users =(props: UsersPropsType) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i=1; i<= pagesCount; i++)
        pages.push(i)

    return <div >
        <div>
            {pages.map(p =>{
                return <span className={props.currentPage ===p ? s.selectedPage : ""}
                             onClick = {(e)=> {props.onPageChanged(p)}}>{p}</span>

            })}

        </div>
        {
            props.users.map( u => <div key={u.id}>
                    <div className={s.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto}  />
                         </NavLink>
                    </div>
                    <div className={s.buttons} >
                        {u.followed
                            ? <button className={s.button} onClick={()=>{
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY": "376d6d73-ae3d-46e4-8894-209dab39c2c3"
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                    })


                            }}> Unfollow</button>
                            : <button className={s.button} onClick={()=>{

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "376d6d73-ae3d-46e4-8894-209dab39c2c3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                        })


                            }}> Follow</button>
                        }

                    </div>
                </span>
                        <span className={s.userInfo} >
                    <span className={s.text}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span className={s.location}>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users