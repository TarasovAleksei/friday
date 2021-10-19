import React, {useState} from 'react';
import {Registration} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {
    InitialStateType,
    registrationTC, setMessageAC,
} from "../../Store/registrationReducer";
import {Redirect} from "react-router-dom";

export const RegistrationContainer = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPass] = useState<string>('')
    const [repeatPassword, setRepeatPass] = useState<string>('')

    const {message, successRegistration, lockButton} = useSelector<AppRootStateType, InitialStateType>(state => state.registration)

    const dispatch = useDispatch()

    const onChangeEmail = (email: string) => {
        setEmail(email)
    }
    const onChangePassword = (password: string) => {
        setPass(password)
    }
    const onChangeRepeatPassword = (repeatPassword: string) => {
        setRepeatPass(repeatPassword)
    }
    const registration = () => {
        if (password === repeatPassword) {
            dispatch(registrationTC({email, password}))
        } else {
            dispatch(setMessageAC('please confirm password'))
        }
    }

    if (successRegistration) {
        return <Redirect to={'/auth'}/>
    }

    return (
        <>
            <Registration registration={registration} onChangeRepeatPassword={onChangeRepeatPassword}
                          onChangePassword={onChangePassword}
                          onChangeEmail={onChangeEmail} message={message} email={email} password={password}
                          repeatPassword={repeatPassword}
                          disabled={lockButton}
            />
        </>
    );
}


