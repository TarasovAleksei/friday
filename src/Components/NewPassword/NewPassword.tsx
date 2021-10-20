import React from 'react';
import { Redirect } from 'react-router-dom';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

type PropsType = {
    onChangeNewPass: (password: string) => void,
    newPassword: string
    testMessage: string | null
    sendNewPass: () => void
}

export const NewPassword = (props: PropsType) => {
    if(props.testMessage==='success') return <Redirect to={'/'}/>
    return (
        <div>
            <div>{props.testMessage}</div>
            Create new password
            <SuperInputText type='password' placeholder='new password' onChangeText={props.onChangeNewPass}
                            value={props.newPassword}/>
            <SuperButton name={'send'} onClick={props.sendNewPass}/>
        </div>
    );
};

