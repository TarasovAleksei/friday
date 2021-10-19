import React from 'react';
import {NavLink} from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from './Registration.module.css';
import logo from '../../images/logo/logo.png';


type PropsType = {
    email: string
    password: string
    repeatPassword: string
    message: string
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string) => void
    onChangeRepeatPassword: (repeatPassword: string) => void
    registration: () => void
}
export const Registration = (props: PropsType) => {

    return (
        <>
            <div className={s.inner}>
                {props.message}
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt="" />
                </div>
                <h2 className={s.title}>Registration</h2>
                <form action="">
                <label htmlFor="text">Email</label>
                    <SuperInputText onChangeText={props.onChangeEmail} value={props.email}/>
                <label htmlFor="text">Password</label>
                    <SuperInputText onChangeText={props.onChangePassword} value={props.password}/>
                <label htmlFor="text">Confirm password</label>
                    <SuperInputText onChangeText={props.onChangeRepeatPassword} value={props.repeatPassword}/>
                <div className={s.wrapper}>
                    <NavLink to={'/auth'}>
                    <SuperButton name={'Cancel'}/>
                    </NavLink>
                <NavLink to={''}>
                    <SuperButton name={'Register'}/>
                </NavLink>
                {/* <SuperButton style={{padding: "0px 62px"}} name={'Register'} onClick={props.registration}/> */}
                </div>
                </form>
            </div>
        </>

    );
}


