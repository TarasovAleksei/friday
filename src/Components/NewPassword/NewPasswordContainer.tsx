import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {NewPassword} from "./NewPassword";
import {useDispatch} from "react-redux";
import {setNewPassTC} from "../../Store/forgotPasswordReducer";

export type ParamsType = {
    tokenForPass: string
}
export const NewPasswordContainer = () => {
    const [newPassword, setNewPassword] = useState<string>('')
    const tokenForPass = useParams<ParamsType>().tokenForPass
    const dispatch = useDispatch()
    const onChangeNewPass = (password: string) => {
        setNewPassword(password)
    }
    const sendNewPass = () => {
        dispatch(setNewPassTC(newPassword, tokenForPass))
    }
    return (
        <NewPassword onChangeNewPass={onChangeNewPass} newPassword={newPassword}
                     sendNewPass={sendNewPass}/>
    );
};

