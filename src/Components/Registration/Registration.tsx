import React from 'react';
import {NavLink} from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from './Registration.module.css';
import logo from '../../images/logo/logo.png';
import {RequestStatusType} from "../../Store/appReducer";
import { Preloader } from '../Preloader/Preloader';

export const Registration = (props: PropsType) => {

    return (
        <>
            <div className={s.holder}>
                <div className={s.inner}>
                    <div className={s.wrap}>
                        <img className={s.img} src={logo} alt=""/>
                    </div>
                    <h2 className={s.title}>Registration</h2>
                    {
                        props.status === 'loading'
                        && <div className={s.preloaderApp}> <Preloader/> </div>
                    }
                    <div style={{color: 'red'}}>{props.message}</div>
                    <form action="">
                        {(props.emailVisited && props.emailError) &&
                        <div style={{color: 'red'}}>{props.emailError}</div>}
                        <SuperInputText style={{marginTop: '20px'}}
                                        onChangeText={props.onChangeEmail}
                                        placeholder={'Email'}
                                        value={props.email}
                                        name={'email'}
                                        onBlur={(e) => props.blurHandler(e)}/>
                        {(props.passwordVisited && props.passwordError) &&
                        <div style={{color: 'red'}}>{props.passwordError}</div>}
                        <SuperInputText style={{marginTop: '20px'}}
                                        onChangeText={props.onChangePassword}
                                        placeholder={'Password'}
                                        value={props.password}
                                        type={'password'}
                                        name={'password'}
                                        onBlur={(e) => props.blurHandler(e)}/>
                        {(props.repeatPasswordVisited && props.repeatPasswordError) &&
                        <div style={{color: 'red'}}>{props.repeatPasswordError}</div>}
                        <SuperInputText style={{marginTop: '20px'}}
                                        onChangeText={props.onChangeRepeatPassword}
                                        placeholder={'Confirm password'}
                                        value={props.repeatPassword}
                                        type={'password'}
                                        name={'repeatPassword'}
                                        onBlur={(e) => props.blurHandler(e)}/>
                        <div className={s.wrapper}>
                            <NavLink to={'/'}>
                                <SuperButton name={'Cancel'}/>
                            </NavLink>
                            <SuperButton disabled={props.disabled || !props.formValid}
                                         style={{padding: "7px 62px"}}
                                         name={'Register'}
                                         onClick={props.registration}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

//types
type PropsType = {
    email: string
    password: string
    repeatPassword: string
    message: string
    disabled: boolean
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string) => void
    onChangeRepeatPassword: (repeatPassword: string) => void
    registration: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    emailVisited: boolean
    status: RequestStatusType
    passwordVisited: boolean
    repeatPasswordVisited: boolean
    formValid: boolean
    emailError: string
    passwordError: string
    repeatPasswordError: string
    blurHandler: (e: React.FormEvent<HTMLInputElement>) => void
}

