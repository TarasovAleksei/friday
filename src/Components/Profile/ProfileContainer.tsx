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
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    if (!isInitialized) {
        return <h1
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%', color: 'green'}}>
            Loading...
        </h1>
    }

    if (!isLoggedIn) {
        return <Redirect to={'/auth'}/>
    }

    return (
        <Profile data={data}
                 status={status}/>
    );
};
