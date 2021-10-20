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

    useEffect(() => {
        debugger
    }, [])

    const onChangeNewPass = (password: string) => {
        setNewPassword(password)
    }
    const sendNewPass = () => {
        debugger
        dispatch(setNewPassTC(newPassword, tokenForPass))
    }
    return (
        <NewPassword onChangeNewPass={onChangeNewPass} newPassword={newPassword}
                     sendNewPass={sendNewPass}/>
    );
};

// <a href="http://localhost:3000/#/newpassword/31ec9bb0-3199-11ec-8451-c1613a27f358" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3000/%23/newpassword/31ec9bb0-3199-11ec-8451-c1613a27f358&amp;source=gmail&amp;ust=1634815872333000&amp;usg=AFQjCNGqsMll_WmV68Bt3lpXJZu5_g52qw">
//                 link</a>