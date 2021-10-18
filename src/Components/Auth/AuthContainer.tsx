import React from "react";
import {Auth} from "./Auth";
import {setSuccessRegAC} from "../../Store/registrationReducer";
import {useDispatch} from "react-redux";

export const AuthContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setSuccessRegAC(false))
    }, [])
    return (
        <Auth/>
    )
}
