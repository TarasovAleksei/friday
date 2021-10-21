import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from "./RecoveryPassword.module.css"
import logo from '../../images/logo/logo.png';
import {NavLink} from "react-router-dom";

export const RecoveryPassword = (props: RecoveryPasswordPropsType) => {
    return (
        <div className={s.inner}>
            <div className={s.wrap}>
                <img className={s.img} src={logo} alt=""/>
            </div>
            <h2 className={s.title}>Forgot your password?</h2>
            <div className={s.form}>
                {(props.emailVisited && props.emailError) && <div style={{color: 'red'}}>{props.emailError}</div>}
                <SuperInputText type='email'
                                onBlur={(e) => props.blurHandler(e)}
                                onChangeText={props.onChangeEmail}
                                placeholder={'Email'}
                                value={props.email}/>
                <label style={{marginTop: '15px'}}
                       htmlFor="Email">
                    Enter your email address and we will send you further instructions
                </label>
                <NavLink to={'/CheckEmail'}>
                    <SuperButton className={s.disabled}
                                 disabled={props.disabled || !props.formValid}
                                 style={{padding: '9px 70px', marginTop: '100px'}}
                                 name={'Send Instructions'}
                                 onClick={props.onHandleForgot}/>
                </NavLink>
                <div>Did you remember your password</div>
                <NavLink to={'/'}>
                    <div>Try logging in</div>
                </NavLink>
            </div>
        </div>
    );
};

type RecoveryPasswordPropsType = {
    onHandleForgot: () => void
    email: string
    onChangeEmail: (email: string) => void
    disabled: boolean
    emailVisited: boolean
    formValid: boolean
    blurHandler: (e: React.FormEvent<HTMLInputElement>) => void
    emailError: string
}
