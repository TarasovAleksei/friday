import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperCheckbox} from "../../common/SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';
import {RequestStatusType} from "../../Store/appReducer";
import s from "./Login.module.css"
import logo from '../../images/logo/logo.png';
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
                <img className={s.img} src={logo} alt="" />
            </div>
            <h1 className={s.title}>Login</h1>
            {
                status === 'loading'
                && <div
                    style={{color: 'green'}}>
                    Loading...
                </div>
            }
            { errorMessage }
            <div className={s.formLogin}>
            <SuperInputText type='email' placeholder='Email' onChangeText={onChangeEmail} value={email}/>
            <SuperInputText style={{marginTop: '24px'}} type='password' placeholder='Password' onChangeText={onChangePassword} value={password}/>
                <div className={s.wrapper}>
                    <div className={s.recover}>
                        <NavLink style={{textDecoration: 'none', color:'#2d2e46', alignItems:'center'}} to='/recoverypassword'>forgot password?</NavLink>
                    </div>
                    <div className={s.formWrap}>
                        <SuperCheckbox style={{margin: "0"}} onChangeChecked={onChangeRememberMe} checked={rememberMe}/>
                        <span className={s.span}>Remember me</span>
                    </div>
                </div>
            <SuperButton style={{maxWidth:'266px', width:'100%', marginTop: '70px'}} name={'Login'} onClick={auth}/>
            </div>

            
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