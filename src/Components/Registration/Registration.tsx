import React, {useState} from 'react';
import {SuperInputText} from "../../common/SuperComponents/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {Redirect} from "react-router-dom";

export const Registration = () => {
    const [bla, setBla] = useState(true)
    const callBack = () => {
        setBla(false)
    }

    if (!bla) {
        return <Redirect from={'/registration'} to={'/login'}/>
    }

    return (
        <>
            <div>
                <div>Registration</div>
                <SuperInputText/>
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton name={'register'}/>
                <SuperButton name={'cancel'} onClick={() => {
                    callBack()
                }}/>
            </div>
        </>

    );
}


