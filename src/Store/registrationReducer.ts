import {Dispatch} from "redux";
import {authAPI, LoginType} from "../common/Api/api";
import {setAppStatusAC, setLockButtonAC} from "./appReducer";

export type InitialStateType = typeof initialState;
export const initialState = {
    message: '',
    successRegistration: false,
}

export const registrationReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "REGISTRATION/SET-MESSAGE":
            return {...state, message: action.message}
        case "REGISTRATION/SET-SUCCESS-REGISTR":
            return {...state, successRegistration: action.successRegistration}
        default:
            return state
    }
}

//actions
export const setMessageAC = (message: string) => ({type: 'REGISTRATION/SET-MESSAGE', message} as const)
export const setSuccessRegAC = (successRegistration: boolean) => ({
    type: 'REGISTRATION/SET-SUCCESS-REGISTR',
    successRegistration
} as const)

//thunks
export const registrationTC = (data: LoginType) => (dispatch: Dispatch) => {
    dispatch(setLockButtonAC(true))
    dispatch(setAppStatusAC("loading"))
    authAPI.register(data).then(() => {
        dispatch(setSuccessRegAC(true))
        dispatch(setAppStatusAC("succeeded"))
    }).catch((error) => {
        dispatch(setMessageAC(error.response.data.error))
    }).finally(() => {
            dispatch(setLockButtonAC(false))
            dispatch(setAppStatusAC(''))
        }
    )
}

//types
export type SetMessageActionType = ReturnType<typeof setMessageAC>
export type SetSuccessRegActionType = ReturnType<typeof setSuccessRegAC>
export type TotalActionType =
    | SetMessageActionType
    | SetSuccessRegActionType