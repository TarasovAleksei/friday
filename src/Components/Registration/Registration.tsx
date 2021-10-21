import React from 'react';
import {NavLink} from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from './Registration.module.css';
import logo from '../../images/logo/logo.png';

export const Registration = (props: PropsType) => {

    return (
        <>
            <div className={s.conteiner}>
                <div className={s.inner}>
                {props.message}
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt=""/>
                </div>
                <h2 className={s.title}>Registration</h2>
                <form action="">
                   {/*  <label htmlFor="text">Email</label> */}
                    <SuperInputText style={{marginTop:'20px'}} onChangeText={props.onChangeEmail} placeholder={'Email'} value={props.email}/>
                    {/* <label htmlFor="text">Password</label> */}
                    <SuperInputText style={{marginTop:'20px'}} onChangeText={props.onChangePassword} placeholder={'Password'} value={props.password} type={'password'}/>
                    {/* <label htmlFor="text">Confirm password</label> */}
                    <SuperInputText style={{marginTop:'20px'}} onChangeText={props.onChangeRepeatPassword} placeholder={'Confirm password'} value={props.repeatPassword}
                                    type={'password'}/>
                    <div className={s.wrapper}>
                        <NavLink to={'/'}>
                            <SuperButton name={'Cancel'}/>
                        </NavLink>
                        <SuperButton disabled={props.disabled} style={{padding: "0px 62px"}} name={'Register'}
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
    registration: () => void
}

