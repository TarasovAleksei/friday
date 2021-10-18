import {Dispatch} from "redux";
import {authAPI, LoginType} from "../common/Api/api";

export type InitialStateType = typeof initialState;
export const initialState = {
    message: '',
    successRegistration: false,
}

export const registrationReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "REGISTRATION/SET-MESSAGE":
            return {
                ...state, message: action.message
            }
        case "REGISTRATION/SET-SUCCESS-REGISTR":
            return {
                ...state, successRegistration: action.successRegistration
            }
        default:
            return state
    }

}

export const setMessageAC = (message: string) => ({type: 'REGISTRATION/SET-MESSAGE', message} as const)
export const setSuccessRegAC = (successRegistration: boolean) => ({
    type: 'REGISTRATION/SET-SUCCESS-REGISTR',
    successRegistration
} as const)

export const registrationTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.register(data).then(response => {
        dispatch(setSuccessRegAC(true))
    }).catch((error) => {
        dispatch(setMessageAC(error.response.data.error))
        console.log(error.response.data.error)
    })
}

export type SetMessageActionType = ReturnType<typeof setMessageAC>
export type SetSuccessRegActionType = ReturnType<typeof setSuccessRegAC>
export type TotalActionType =
    | SetMessageActionType | SetSuccessRegActionType