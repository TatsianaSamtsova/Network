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
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    pageSize: number,
    totalUsersCount: number,
    currentPage: number

}

class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);

        })
    }
    render() {
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i=1; i<= pagesCount; i++)
            pages.push(i)
            return  <div >
                <div>
                    {pages.map(p =>{
                        return <span className={this.props.currentPage ===p ? s.selectedPage : ""}
                                     onClick = {(e)=> {this.onPageChanged(p)}}>{p}</span>

                    })}

                </div>
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