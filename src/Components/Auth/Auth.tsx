import s from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {LoginContainer} from "../Login/LoginContainer";

export const Auth = () => {
    return (
        <div>
            <div>
                <NavLink activeClassName={s.activeLink} to="/registration">Registration</NavLink>
            </div>
            <LoginContainer/>
        </div>
    )
}
