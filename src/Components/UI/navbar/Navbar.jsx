import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

export const Navbar = () => {

    const setActive = ({isActive}) => isActive ? `${s.active} ${s.links}` : s.links

    return (
        <div className={s.navbar}>
            <div className={s.links}>
                <NavLink className={setActive} to='/posts'>Посты</NavLink>
                <NavLink className={setActive} to='/about'>O сайте</NavLink>
            </div>
        </div>
    )
}