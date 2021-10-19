import React, {useEffect} from "react";
import {Auth} from "./Auth";
import {useDispatch} from "react-redux";
import {setSuccessRegAC} from "../../Store/registrationReducer";

export const AuthContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSuccessRegAC(false))
    }, [])

    return (
        <Auth/>
    )
}
