import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperCheckbox} from "../../common/SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

export const Login = () => {
    return (
        <div>
            <div>Login</div>
            <SuperInputText/>
            <SuperInputText/>
            <SuperCheckbox/> <span>Remember me</span>
            <SuperButton name={'Login'}/>
        </div>
    );
};

