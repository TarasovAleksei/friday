import React from 'react';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';
import {RequestStatusType} from "../../Store/appReducer";
import s from "./CheckEmail.module.css"
import logo from '../../images/logo/logo.png';
import picEmail from '../../images/checkEmail/pic-email.png';
export const Login: React.FC<PropsType> = (props) => {

    const {
        email,
        password,
        rememberMe,
        onChangeEmail,
        onChangePassword,
        onChangeRememberMe,
        auth,
        errorMessage,
        status,
    } = props

    return (
        <div className={s.inner}>
            <div className={s.wrap}>
                <img className={s.img} src={logo} alt="logo" />
            </div>
            <h1 className={s.title}>Check Email</h1>
            <div className={s.wrap}>
                <img className={s.img} src={picEmail} alt="email" />
            </div>
            <span className={s.span}>We’ve sent an Email with instructions to example@mail.com</span>
            <NavLink to={'/'}>
                <SuperButton style={{maxWidth:'266px', width:'100%', marginTop: '70px'}} name={'Back'} onClick={auth}/>
            </NavLink>
        </div>
    );
};

//types
type PropsType = {
    email: string
    password: string
    rememberMe: boolean
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string) => void
    onChangeRememberMe: (rememberMe: boolean) => void
    auth: () => void
    errorMessage: string
    status: RequestStatusType
}