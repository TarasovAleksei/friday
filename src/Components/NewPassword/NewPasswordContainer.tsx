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

    const [passwordVisited, setPasswordVisited] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<string>('Password cannot be empty')
    const [formValid, setFormValid] = useState(false)
    const [newPassword, setNewPassword] = useState<string>('')

    const tokenForPass = useParams<ParamsType>().tokenForPass
    const testMessage = useSelector<AppRootStateType, string | null>(state => state.forgotPassword.testMessage)
    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)

    const dispatch = useDispatch()

    useEffect(() => {
        if (passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [passwordError])

    const blurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.type === 'password') {
            setPasswordVisited(true)
        }
    }

    const onChangeNewPass = (newPassword: string) => {
        setNewPassword(newPassword)
        if (newPassword.length < 7) {
            setPasswordError('Password must be longer than 7 characters')
            if (!newPassword) {
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const sendNewPass = () => {
        dispatch(setNewPassTC(newPassword, tokenForPass))
    }

    return (
        <NewPassword disabled={lockButton}
                     testMessage={testMessage}
                     onChangeNewPass={onChangeNewPass}
                     newPassword={newPassword}
                     sendNewPass={sendNewPass}
                     passwordVisited={passwordVisited}
                     formValid={formValid}
                     passwordError={passwordError}
                     blurHandler={blurHandler}/>
    );
};
