import React from 'react';
import {NavLink} from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

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
            <div>
                <div>Registration</div>
                {props.message}
                <SuperInputText onChangeText={props.onChangeEmail} value={props.email}/>
                <SuperInputText onChangeText={props.onChangePassword} value={props.password}/>
                <SuperInputText onChangeText={props.onChangeRepeatPassword} value={props.repeatPassword}/>
                <NavLink to={'/login'}>
                    <SuperButton name={'cancel'}/>
                </NavLink>
                <SuperButton name={'register'} onClick={props.registration}/>
            </div>
        </>

    );
}


