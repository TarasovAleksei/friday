import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {InitialStateType, loginVerificationTC, setLoginAC} from "../../Store/forgotPasswordReducer";
import {Redirect} from "react-router-dom";
import {RecoveryPassword} from "./RecoveryPassword";

export const RecoveryPasswordContainer = () => {
    const dispatch = useDispatch()
    const {email} = useSelector<AppRootStateType, InitialStateType>(state => state.forgotPassword)
    const onChangeEmail = (email: string) => {
        dispatch(setLoginAC(email))
    }
    const onHandleForgot = () => {
        dispatch(loginVerificationTC())
    }

    return (
        <div>
            <RecoveryPassword email={email}
                              onChangeEmail={onChangeEmail}
                              onHandleForgot={onHandleForgot}
            />
        </div>
    );
};

