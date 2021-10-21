import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {loginVerificationTC, setLoginAC} from "../../Store/forgotPasswordReducer";
import {RecoveryPassword} from "./RecoveryPassword";

export const RecoveryPasswordContainer = () => {

    const [email, setEmail] = useState<string>('')
    const [emailVisited, setEmailVisited] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Email cannot be empty')
    const [formValid, setFormValid] = useState(false)

    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)

    const dispatch = useDispatch()

    useEffect(() => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError])

    const blurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.type === 'email') {
            setEmailVisited(true)
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
                              disabled={lockButton}
                              emailVisited={emailVisited}
                              formValid={formValid}
                              blurHandler={blurHandler}
                              emailError={emailError}
            />
        </div>
    );
};

