import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/imgmen.jpg";
import {userType} from "../../redux/users-reduce";

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto}  />
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