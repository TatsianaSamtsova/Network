import React from "react";
import s from "./Users.module.css"
import {userType} from "../../redux/users-reduce";
import axios from "axios";
import userPhoto from "../../assets/images/imgmen.jpg"

type UsersPropsType = {
    users: Array<userType>,
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users:Array<userType>) => void;

}

class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
            return  <div >
                {
                    this.props.users.map( u => <div key={u.id}>
                            <div className={s.user}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto}  />
                    </div>
                    <div className={s.buttons} >
                        {u.followed
                            ? <button className={s.button} onClick={()=>{this.props.unfollow(u.id)}}> Unfollow</button>
                            : <button className={s.button} onClick={()=>{this.props.follow(u.id)}}> Follow</button>
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
}

export default Users