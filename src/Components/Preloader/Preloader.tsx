import React from "react";
import s from './Preloader.module.css';

export const Preloader = () => {
    return <div className = {s.lds_roller} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

}