import React from 'react'
import s from './Error404.module.css';

export const Error404 = () => {
    return (
        <div className={s.errorPage}>
            <div className={s.wrap} >
                <h1 className={s.title}>404</h1>
                <span className={s.span}>Page not found!</span>
            </div>
            
        </div>
    )
}

