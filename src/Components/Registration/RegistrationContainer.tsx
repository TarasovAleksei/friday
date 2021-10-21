import React, {useEffect, useState} from 'react';
import {Registration} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {InitialStateType, registrationTC, setMessageAC, setSuccessRegAC} from "../../Store/registrationReducer";
import {Redirect} from "react-router-dom";

export const RegistrationContainer = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [emailVisited, setEmailVisited] = useState<boolean>(false)
    const [passwordVisited, setPasswordVisited] = useState<boolean>(false)
    const [repeatPasswordVisited, setRepeatPasswordVisited] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Email cannot be empty')
    const [passwordError, setPasswordError] = useState<string>('Password cannot be empty')
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>('Password cannot be empty')
    const [formValid, setFormValid] = useState(false)

    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)
    const {message, successRegistration} = useSelector<AppRootStateType, InitialStateType>(state => state.registration)

    const dispatch = useDispatch()

    useEffect(() => {
        if (emailError || passwordError || repeatPasswordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
        return function cleanup () {
            dispatch(setSuccessRegAC(false))
            dispatch(setMessageAC(''))
        }
    }, [emailError, passwordError, repeatPasswordError])

    const blurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'email':
                setEmailVisited(true)
                break
            case 'password':
                setPasswordVisited(true)
                break
            case 'repeatPassword':
                setRepeatPasswordVisited(true)
        }
    }

    const onChangeEmail = (email: string) => {
        setEmail(email)
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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

    const onChangeRepeatPassword = (repeatPassword: string) => {
        setRepeatPassword(repeatPassword)
        if (repeatPassword.length < 7) {
            setRepeatPasswordError('Password must be longer than 7 characters')
            if (!repeatPassword) {
                setRepeatPasswordError('Password cannot be empty')
            }
        } else {
            setRepeatPasswordError('')
        }
    }

    const registration = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (password === repeatPassword) {
            dispatch(registrationTC({email, password}))
        } else {
            dispatch(setMessageAC('Password mismatch'))
        }
    }

    if (successRegistration) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            <Registration registration={registration}
                          onChangeRepeatPassword={onChangeRepeatPassword}
                          onChangePassword={onChangePassword}
                          onChangeEmail={onChangeEmail}
                          message={message}
                          email={email}
                          password={password}
                          repeatPassword={repeatPassword}
                          disabled={lockButton}
                          emailVisited={emailVisited}
                          passwordVisited={passwordVisited}
                          repeatPasswordVisited={repeatPasswordVisited}
                          formValid={formValid}
                          emailError={emailError}
                          passwordError={passwordError}
                          blurHandler={blurHandler}
                          repeatPasswordError={repeatPasswordError}/>
        </>
    );
}


