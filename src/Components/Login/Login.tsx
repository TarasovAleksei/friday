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
        disabled,
        emailVisited,
        emailError,
        passwordVisited,
        passwordError,
        blurHandler,
        formValid
    } = props

    return (
        <div className={s.holder}>
            <div className={s.inner}>
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt=""/>
                </div>
                <h1 className={s.title}>Login</h1>
                {
                    status === 'loading'
                    && <div
                        style={{color: 'green'}}>
                        Loading...
                    </div>
                }
                <div style={{color: 'red'}}>{errorMessage}</div>
                <div className={s.formLogin}>
                    {(emailVisited && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <SuperInputText onBlur={(e) => blurHandler(e)}
                                    type='email'
                                    placeholder='Email'
                                    onChangeText={onChangeEmail}
                                    value={email}/>
                    {(passwordVisited && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <SuperInputText style={{marginTop: '24px'}}
                                    type='password'
                                    placeholder='Password'
                                    onChangeText={onChangePassword}
                                    value={password}
                                    onBlur={(e) => blurHandler(e)}/>
                    <div className={s.wrapper}>
                        <div className={s.recover}>
                            <NavLink className={s.navbar}
                                     style={{textDecoration: 'none', color: '#2d2e46', alignItems: 'center'}}
                                     activeStyle={{color: 'red', textDecoration: 'none'}} to='/recoverypassword'>
                                Forgot password?
                            </NavLink>
                        </div>
                        <div className={s.formWrap}>
                            <SuperCheckbox style={{margin: "0"}}
                                           onChangeChecked={onChangeRememberMe}
                                           checked={rememberMe}/>
                            <span className={s.span}>Remember me</span>
                        </div>
                    </div>
                    <SuperButton disabled={disabled || !formValid}
                                 style={{maxWidth: '266px', width: '100%', marginTop: '70px'}}
                                 name={'Login'} onClick={auth}/>
                </div>
                <div className={s.wrapRegistration}>
                    <span className={s.spanText}>Don’t have an account?</span>
                    <NavLink className={s.link} activeClassName={s.activeLink} to="/registration">
                        Sign Up
                    </NavLink>
            </div>
            </div>
        </div>
    );
};

//types
type PropsType = {
    email: string
    password: string
    rememberMe: boolean
    disabled: boolean
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string) => void
    onChangeRememberMe: (rememberMe: boolean) => void
    auth: () => void
    errorMessage: string
    status: RequestStatusType
    emailVisited: boolean
    emailError: string
    passwordVisited: boolean
    passwordError: string
    blurHandler: (e: React.FormEvent<HTMLInputElement>) => void
    formValid: boolean
}