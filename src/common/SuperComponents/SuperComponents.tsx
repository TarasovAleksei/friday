import React, {useState} from 'react';
import {SuperInputText} from "./c1-SuperInputText/SuperInputText";
import {SuperButton} from "./c2-SuperButton/SuperButton";
import {SuperCheckbox} from "./c3-SuperCheckbox/SuperCheckbox";
import {SuperEditableSpan} from "./c4-SuperEditableSpan/SuperEditableSpan";
import {SuperSelect} from "./c5-SuperSelect/SuperSelect";
import {SuperRadio} from "./c6-SuperRadio/SuperRadio";
import s from './SuperComponents.module.css'
const arr = ['x', 'y', 'z']
export const SuperComponents = () => {
    const [value, onChangeOption] = useState(arr[0])
    return (
        <div className={s.container}>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperSelect options={arr}/>
            <SuperRadio value={value} options={arr} onChangeOption={onChangeOption}/>
        </div>
    );
};

