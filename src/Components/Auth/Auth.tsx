import s from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {LoginContainer} from "../Login/LoginContainer";

export const Auth = () => {
    return (
        <div className={s.innerAuth}>
            <div className={s.wrapRegistration}>
                <span className={s.spanTextAuth}>Don’t have an account?</span>
                <NavLink style={{textDecoration: 'none', color: '#21268f', marginTop:'10px'}} activeClassName={s.activeLink} to="/registration">Sign Up</NavLink>
            </div>
            <LoginContainer/>
        </div>
    )
}
