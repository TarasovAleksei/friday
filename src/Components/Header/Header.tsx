import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

export const Header: React.FC<PropsType> = (props) => {

    const {
        logoutHandler,
        isLoggedIn,
    } = props

    return (
        <nav className={s.nav}>

            {/*{!isLoggedIn &&
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/login">Login
            </NavLink>
            </div>
            }*/}
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/login">Login
            </NavLink>
            </div>
            <div className={s.item}><NavLink activeClassName={s.activeLink}
                                             to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/registration">Registration
            </NavLink>
            </div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/newpassword">New Password</NavLink>
            </div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/404">Error 404</NavLink>
            </div>
            <SuperButton name='logout' onClick={logoutHandler}/>
            {/*{ isLoggedIn && <SuperButton name='logout' onClick={logoutHandler}/> }*/}

        </nav>
    )
}

//types
type PropsType = {
    logoutHandler: () => void
    isLoggedIn: boolean
}