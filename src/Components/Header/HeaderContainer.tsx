import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../Store/authReducer";
import {Header} from "./Header";
import {AppRootStateType} from "../../Store/redux-store";
import { Redirect } from "react-router-dom";

export const HeaderContainer = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const lockButton = useSelector<AppRootStateType, boolean>(state => state.app.lockButton)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <Header logoutHandler={logoutHandler}
                isLoggedIn={isLoggedIn}
        disabled={lockButton}/>
    )
}