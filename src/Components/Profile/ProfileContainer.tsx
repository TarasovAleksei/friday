import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../Store/redux-store";
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {Profile} from "./Profile";

export const ProfileContainer = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const data = useSelector<AppRootStateType, UserData>(state => state.app.data)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (

        <Profile data={data}
                 status={status}
        />

    );
};
