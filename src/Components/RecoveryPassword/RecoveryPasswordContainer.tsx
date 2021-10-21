import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {InitialStateType, loginVerificationTC, setLoginAC} from "../../Store/forgotPasswordReducer";
import {RecoveryPassword} from "./RecoveryPassword";

export const RecoveryPasswordContainer = () => {
    const dispatch = useDispatch()
    const {email} = useSelector<AppRootStateType, InitialStateType>(state => state.forgotPassword)
    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)
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
                              disabled={lockButton}
            />
        </div>
    );
};

