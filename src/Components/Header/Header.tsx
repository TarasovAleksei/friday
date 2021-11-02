import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import logo from "../../images/logo/logo.png";
import iconPacks from "../../images/nav/icon-packs.svg";
import iconProfile from "../../images/nav/icon-profile.svg";


export const Header: React.FC<PropsType> = (props) => {

    const {
        logoutHandler,
        isLoggedIn,
        disabled
    } = props

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <img className={s.img} src={logo} alt=""/>
                    </div>
                    <nav className={s.headerNav}>
                        <ul className={s.list}>

                            <li className={s.item}><NavLink
                                activeClassName={s.activeLink} to="/packs"><img src={iconPacks} alt="icon"/>Packs
                                list</NavLink></li>
                            <li className={s.item}><NavLink
                                activeClassName={s.activeLink} to="/profile"><img src={iconProfile} alt="icon"/>Profile</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                {isLoggedIn &&
                <SuperButton disabled={disabled} className={s.headerBtn} name='logout' onClick={logoutHandler}/>
                }
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