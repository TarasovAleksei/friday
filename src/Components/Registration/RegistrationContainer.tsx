import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {Registration} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {
    InitialStateType,
    registrationTC,
    setEmailAC,
    setPasswordAC,
    setRepeatPasswordAC
} from "../../Store/registrationReducer";

export const RegistrationContainer = () => {
    const [bla, setBla] = useState(true)
    const dispatch = useDispatch()
    const {
        email,
        password,
        repeatPassword, message
    } = useSelector<AppRootStateType, InitialStateType>(state => state.registration)

    const redirectCallBack = () => setBla(false)
    const onChangeEmail = (email: string) => {
        dispatch(setEmailAC(email))
    }
    const onChangePassword = (password: string) => {
        dispatch(setPasswordAC(password))
    }
    const onChangeRepeatPassword = (repeatPassword: string) => {
        dispatch(setRepeatPasswordAC(repeatPassword))
    }
    const registration = () => {
        dispatch(registrationTC({email, password}))
    }
    if (!bla) {
        return <Redirect from={'/registration'} to={'/auth'}/>
    }

    return (
        <>
            <Registration registration={registration} onChangeRepeatPassword={onChangeRepeatPassword} onChangePassword={onChangePassword}
                          onChangeEmail={onChangeEmail} message={message} email={email} password={password}
                          repeatPassword={repeatPassword}
                          handleCancel={redirectCallBack}/>
        </>
    );
}


