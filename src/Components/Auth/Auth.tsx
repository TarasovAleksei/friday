import s from "./Auth.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {LoginContainer} from "../Login/LoginContainer";

export const Auth = () => {

    return (
        <div className={s.innerAuth}>
            <LoginContainer/>
        </div>
    )
}
