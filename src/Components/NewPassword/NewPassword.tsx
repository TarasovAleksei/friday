import React from 'react';
import { Redirect } from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import s from './NewPassword.module.css'
import logo from '../../images/logo/logo.png'

type PropsType = {
    onChangeNewPass: (password: string) => void,
    newPassword: string
    testMessage: string | null
    sendNewPass: () => void
}

export const NewPassword = (props: PropsType) => {
    if(props.testMessage==='success') return <Redirect to={'/'}/>
    return (
        <div className={s.conteiner}>
            <div className={s.inner}>
                <div className={s.wrap}>
                    <img className={s.img} src={logo} alt="" />
                </div>
                <h1 className={s.title}>Create new password</h1> 
                <div>{props.testMessage}</div>
                <div className={s.form}>
                    <SuperInputText type='password' placeholder='New password' onChangeText={props.onChangeNewPass} value={props.newPassword}/>
                    <p className={s.text}>Create new password and we will send you further instructions to email</p>
                </div>
                    <SuperButton style={{marginTop:'90px'}} name={'Create new password'} onClick={props.sendNewPass}/>
            </div>
        </div>
        
    );
};

