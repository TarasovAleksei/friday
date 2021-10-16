import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {InitialStateType, setLoginAC} from "../../Store/forgotPasswordReducer";
import {Redirect} from "react-router-dom";
import {RecoveryPassword} from "./RecoveryPassword";

export const RecoveryPasswordContainer = () => {

    const [mine, setMine] = useState(true)
    const dispatch = useDispatch()
    const {email, message} = useSelector<AppRootStateType, InitialStateType >(state => state.forgotPassword)
    const redirectCallback = () => setMine(false)
    const onChangeEmail = (email: string) => {
        dispatch(setLoginAC(email))
    }


    if(!mine){
        return <Redirect from={'recoveryPassword'} to={'newPassword'}/>
    }

    return (
        <div>
        <RecoveryPassword sendClick={redirectCallback} email={email} message={message} onChangeEmail={onChangeEmail}/>
        </div>
    );
};

