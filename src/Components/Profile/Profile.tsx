import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../Store/redux-store";
import {UserData} from "../../common/Api/api";

export const Profile = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const data = useSelector<AppRootStateType, UserData>(state => state.auth.data)

    if (!isLoggedIn) {
        return <Redirect to={'/auth'}/>
    }

    return (
        <div>
            Profile
            <div>{data.avatar}</div>
            <div>{data.name}</div>
            <div>{data._id}</div>
        </div>
    );
};


