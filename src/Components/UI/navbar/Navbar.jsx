import React, {useContext} from 'react';
import s from './Navbar.module.css'
import {Button} from "../button/Button";
import {AuthContext} from "../../../context";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const setActive = ({isActive}) => isActive ? `${s.active} ${s.links}` : s.links

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={s.navbar}>
            {
                isAuth
                    ? <>
                        <Button onClick={logout}>Выйти</Button>
                        <div className={s.links}>
                            <NavLink className={setActive} to='/posts'>Посты</NavLink>
                            <NavLink className={setActive} to='/about'>O сайте</NavLink>
                        </div>
                    </>
                    : <div className={s.links}></div>
            }
        </div>
    )
}