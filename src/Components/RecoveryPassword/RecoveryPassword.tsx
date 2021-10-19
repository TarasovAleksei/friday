import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from "./RecoveryPassword.module.css"
import logo from '../../images/logo/logo.png';

type RecoveryPasswordPropsType = {
    sendClick: () => void
    email: string
    message: string
    onChangeEmail: (email: string) => void
}

export const RecoveryPassword = (props: RecoveryPasswordPropsType) => {
    return (
        <div className={s.inner}>
            <div className={s.wrap}>
                    <img className={s.img} src={logo}  alt="" />
                </div>
            <h2 className={s.title}>Forgot your password?</h2>
                <form className={s.form} action="">
                    <SuperInputText onChangeText={props.onChangeEmail} placeholder={'Email'} value={props.email}/>
                    <label style={{marginTop:'15px'}} htmlFor="Email">Enter your email address and we will send you further instructions</label>
                    <SuperButton style={{padding: '9px 70px', marginTop:'100px'}} name={'Send Instructions'} onClick={props.sendClick}/>
                </form>
                <span className={s.span}>Did you remember your password?</span>

        </div>
    );
};

