import React, {useState} from 'react';
import {Registration} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {
    InitialStateType,
    registrationTC,
} from "../../Store/registrationReducer";

export const RegistrationContainer = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPass] = useState<string>('')
    const [repeatPassword, setRepeatPass] = useState<string>('')
    const dispatch = useDispatch()
    const {message} = useSelector<AppRootStateType, InitialStateType>(state => state.registration)

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
        dispatch(registrationTC({email, password}))
    }
    return (
        <>
            <Registration registration={registration} onChangeRepeatPassword={onChangeRepeatPassword}
                          onChangePassword={onChangePassword}
                          onChangeEmail={onChangeEmail} message={message} email={email} password={password}
                          repeatPassword={repeatPassword}
            />
        </>
    );
}


