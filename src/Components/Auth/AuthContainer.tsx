import React, {useEffect} from "react";
import {Auth} from "./Auth";
import {setSuccessRegAC} from "../../Store/registrationReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/redux-store";
import {Redirect} from "react-router-dom";

export const AuthContainer = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    useEffect(() => {
        dispatch(setSuccessRegAC(false))
    }, [])

    if (isLoggedIn) return <Redirect to={'/profile'}/>
    return (
        <Auth/>
    )
}
