import React from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";

export const Registration = () => {
    return (
        <>
            <div>
                <div>Registration</div>
                <SuperInputText/>
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton name={'register'}/>
            </div>
        </>

    );
};

