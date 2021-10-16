import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = () => {

    /*const isLoggedIn = useSelector<AppRootStateType, InitialStateType>(state => state.auth)*/

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


        </nav>
    )
}