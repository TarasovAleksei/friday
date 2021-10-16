import {Dispatch} from "redux";
import {authAPI} from "../common/Api/api";

export type InitialStateType = typeof initialState;
export const initialState = {
    email: '',
    message: '',
}

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD/SET-EMAIL":
            return {
                ...state, email: action.email
            }
        case "FORGOT-PASSWORD/SET-MESSAGE":
            return {
                ...state, message: action.message
            }
        default:
            return state
    }

}
export const setLoginAC = (email: string) => ({type: 'FORGOT-PASSWORD/SET-EMAIL', email} as const)

export const setMessageAC = (message: string) => ({type: 'FORGOT-PASSWORD/SET-MESSAGE', message} as const)

export const loginVerificationTC = (email: string) => (dispatch: Dispatch) => {
    authAPI.forgot(email).then(response => {
        dispatch(setMessageAC('success'))
    }).catch(error => {
        dispatch(setMessageAC(error))
    })
}


export type SetEmailActionType = ReturnType<typeof setLoginAC>
export type SetMessageActionType = ReturnType<typeof setMessageAC>
export type TotalActionType =
    SetEmailActionType
    | SetMessageActionType