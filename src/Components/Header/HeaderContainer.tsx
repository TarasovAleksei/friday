import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../Store/authReducer";
import {Header} from "./Header";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../Store/redux-store";

export const HeaderContainer = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    /*if (!isLoggedIn) {
        return <Redirect to={'/auth'}/>
    }*/

    return (
        <Header logoutHandler={logoutHandler}
                isLoggedIn={isLoggedIn}/>
    )
}