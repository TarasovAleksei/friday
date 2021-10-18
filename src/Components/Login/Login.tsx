import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperCheckbox} from "../../common/SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';
import {RequestStatusType} from "../../Store/appReducer";

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
        <div>
            <div>Login</div>
            {
                status === 'loading'
            && <div
                style={{color: 'green'}}>
                Loading...
            </div>
            }
            {errorMessage}
            <SuperInputText type='email' placeholder='email' onChangeText={onChangeEmail} value={email}/>
            <SuperInputText type='password' placeholder='password' onChangeText={onChangePassword} value={password}/>
            <div>
                <NavLink to='/recoverypassword'>forgot password?</NavLink>
            </div>
            <div>
                <SuperCheckbox onChangeChecked={onChangeRememberMe} checked={rememberMe}/>
                <div>
                    Remember me
                </div>
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
    errorMessage: string
    status: RequestStatusType
}