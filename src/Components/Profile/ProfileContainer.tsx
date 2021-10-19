import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../Store/redux-store";
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {Profile} from "./Profile";
import {Preloader} from "../../common/assets/Preloader";

export const ProfileContainer = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const data = useSelector<AppRootStateType, UserData>(state => state.auth.data)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    if (!isInitialized) {
        return <Preloader/>
    }
    if (!isLoggedIn) return <Redirect to={'/auth'}/>

    return (
        <Profile data={data}
                 status={status}/>
    );
};
