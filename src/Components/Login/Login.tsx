import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperCheckbox} from "../../common/SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';

export const Login: React.FC<PropsType> = (props) => {

    const {
        email,
        password,
        rememberMe,
        onChangeEmail,
        onChangePassword,
        onChangeRememberMe,
        auth
    } = props

    return (
        <div>
            <div>Login</div>
            <div>e-mail</div>
            <SuperInputText onChangeText={onChangeEmail} value={email}/>
            <div>password</div>
            <SuperInputText onChangeText={onChangePassword} value={password}/>
            <div>
                <NavLink to='/recoverypassword'>forgot password?</NavLink>
            </div>
            <div>
                <SuperCheckbox onChangeChecked={onChangeRememberMe} checked={rememberMe}/>
                Remember me
            </div>
            <SuperButton name={'Login'} onClick={auth}/>
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
}