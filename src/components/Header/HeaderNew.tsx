import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderNew.module.css';
const Header = (props: any) => {
       return <header className={s.header}>
        <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-GLi-w4NR82Wpl9D07FuoSKd08ppFYDyQw&usqp=CAU"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>
                   Login
                </NavLink>}
            </div>
    </header>
}
export default Header

