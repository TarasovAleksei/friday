import React from 'react';
import s from "./CheckEmail.module.css"
import logo from '../../images/logo/logo.png';
import picEmail from '../../images/checkEmail/pic-email.png';

export const CheckEmail = () => {

    return (
        <div className={s.conteiner}>
            <div className={s.innerEmail}>
                <div className={s.wrapLogoEmail}>
                    <img className={s.imgEmailLogo} src={logo} alt="logo" />
                </div>
                <div className={s.wrapPicEmail}>
                    <img className={s.imgEmail} src={picEmail} alt="email" />
                </div>
                <h1 className={s.titleEmail}>Check Email</h1>
                <span className={s.spanEmail}>We’ve sent an Email with instructions to example@mail.com</span>
            </div>
        </div>
    );
};