import React, {useEffect, useState} from 'react';
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {authTC, InitialStateType} from "../../Store/authReducer";
import {Redirect} from 'react-router-dom';
import {RequestStatusType} from "../../Store/appReducer";

export const LoginContainer = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [emailVisited, setEmailVisited] = useState<boolean>(false)
    const [passwordVisited, setPasswordVisited] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Email cannot be empty')
    const [passwordError, setPasswordError] = useState<string>('Password cannot be empty')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [formValid, setFormValid] = useState(false)

    const {isLoggedIn, errorMessage} = useSelector<AppRootStateType, InitialStateType>(state => state.auth)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)

    const dispatch = useDispatch()

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        switch (e.currentTarget.type) {
            case 'email':
                setEmailVisited(true)
                break
            case 'password':
                setPasswordVisited(true)
                break
        }
    }

    const onChangeEmail = (email: string) => {
        setEmail(email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Invalid email address')
        } else {
            setEmailError('')
        }
    }

    const onChangePassword = (password: string) => {
        setPassword(password)
        if (password.length < 7) {
            setPasswordError('Password must be longer than 7 characters')
            if (!password) {
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }
    const onChangeRememberMe = () => {
        setRememberMe(!rememberMe)
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
               errorMessage={errorMessage}
               status={status}
               disabled={lockButton}
               emailVisited={emailVisited}
               emailError={emailError}
               passwordVisited={passwordVisited}
               passwordError={passwordError}
               blurHandler={blurHandler}
               formValid={formValid}/>
    )
};