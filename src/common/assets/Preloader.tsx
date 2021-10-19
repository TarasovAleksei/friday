import React from "react";

export const Preloader = () => {
    return (
        <img style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "190px",
            margin: '0 auto'

        }} src='https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif'
             alt="loader"/>
    )
}