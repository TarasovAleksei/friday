import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from "./RecoveryPassword.module.css"
import logo from '../../images/logo/logo.png';
import {NavLink} from "react-router-dom";

type RecoveryPasswordPropsType = {
    onHandleForgot: () => void
    email: string
    onChangeEmail: (email: string) => void
}

export const RecoveryPassword = (props: RecoveryPasswordPropsType) => {
    return (
        <div className={s.conteiner}>
            <div className={s.inner}>
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt=""/>
                </div>
                <h2 className={s.title}>Forgot your password?</h2>
                <div className={s.form}>
                    <SuperInputText onChangeText={props.onChangeEmail} placeholder={'Email'} value={props.email}/>
                    <label style={{marginTop: '15px'}} htmlFor="Email">Enter your email address and we will send you further instructions</label>
                    <NavLink style={{marginTop: '100px'}} to={'/CheckEmail'}>
                        <SuperButton style={{padding: '9px 70px'}} name={'Send Instructions'} onClick={props.onHandleForgot}/>
                    </NavLink>
                    <div>Did you remember your password</div>
                    <NavLink to={'/'}>
                        <div>Try logging in</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

