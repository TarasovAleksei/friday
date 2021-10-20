import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {NewPassword} from "./NewPassword";
import {useDispatch, useSelector} from "react-redux";
import {setNewPassTC} from "../../Store/forgotPasswordReducer";
import {AppRootStateType} from "../../Store/redux-store";

export type ParamsType = {
    tokenForPass: string
}
export const NewPasswordContainer = () => {
    const [newPassword, setNewPassword] = useState<string>('')
    const tokenForPass = useParams<ParamsType>().tokenForPass
    const dispatch = useDispatch()
    const testMessage=useSelector<AppRootStateType, string|null>(state=>state.forgotPassword.testMessage)

    const onChangeNewPass = (password: string) => {
        setNewPassword(password)
    }
    const sendNewPass = () => {
        dispatch(setNewPassTC(newPassword, tokenForPass))
    }
    return (
        <NewPassword testMessage={testMessage} onChangeNewPass={onChangeNewPass} newPassword={newPassword}
                     sendNewPass={sendNewPass}/>
    );
};
