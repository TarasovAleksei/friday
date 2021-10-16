import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

type RecoveryPasswordPropsType = {
    sendClick: () => void
    email: string
    message: string
    onChangeEmail: (email: string) => void
}

export const RecoveryPassword = (props: RecoveryPasswordPropsType) => {
    return (
        <div>
            <h2>Forgot your password?</h2>
            <div>
                <span>Login - </span>
                <SuperInputText onChangeText={props.onChangeEmail} value={props.email}/>
                <SuperButton name={'send'} onClick={props.sendClick}/>
            </div>
        </div>
    );
};

