import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import logo from "../../images/logo/logo.png";


export const Header: React.FC<PropsType> = (props) => {

    const {
        logoutHandler,
        isLoggedIn,
        disabled
    } = props

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt=""/>
                </div>
                <nav className={s.nav}>

                    {!isLoggedIn &&
                    <div className={s.item}><NavLink activeClassName={s.activeLink} to="/">Login</NavLink></div>
                    }
                    <div className={s.item}><NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink></div>
                    <div className={s.item}><NavLink activeClassName={s.activeLink} to="/newpassword">New password</NavLink></div>
                    <div className={s.item}><NavLink activeClassName={s.activeLink} to="/404">Error 404</NavLink></div>
                    {isLoggedIn &&
                    <SuperButton disabled={disabled} className={s.headerBtn} name='logout' onClick={logoutHandler}/>
                    }
                </nav>
            </div>
        </header>
    )
}

//types
type PropsType = {
    logoutHandler: () => void
    isLoggedIn: boolean
    disabled: boolean
}