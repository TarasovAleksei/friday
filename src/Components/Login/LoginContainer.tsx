import React, {useState} from 'react';
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {authTC, InitialStateType} from "../../Store/authReducer";
import {Redirect} from 'react-router-dom';

export const LoginContainer = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const {
        isLoggedIn, errorMessage
    } = useSelector<AppRootStateType, InitialStateType>(state => state.auth)

    const dispatch = useDispatch()

    const onChangeEmail = (email: string) => {
        setEmail(email)
    }
    const onChangePassword = (password: string) => {
        setPassword(password)
    }
    const onChangeRememberMe = () => {
        setRememberMe(true)
    }
    const auth = () => {
        dispatch(authTC({email, password, rememberMe}))
    }

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Login email={email}
               password={password}
               rememberMe={rememberMe}
               onChangeEmail={onChangeEmail}
               onChangePassword={onChangePassword}
               onChangeRememberMe={onChangeRememberMe}
               auth={auth}
               errorMessage={errorMessage}/>
    )
};