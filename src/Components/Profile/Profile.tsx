import React from 'react';
import {useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from "../../Store/redux-store";

export const Profile = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={'/auth'}/>
    }
    return (
        <div>
            Profile
        </div>
    );
};


