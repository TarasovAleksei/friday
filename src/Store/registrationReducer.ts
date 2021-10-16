import {Dispatch} from "redux";
import {authAPI, LoginType} from "../common/Api/api";

export type InitialStateType = typeof initialState;
export const initialState = {
    email: '',
    password: '',
    repeatPassword: '',
    message: '',
}

export const registrationReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "REGISTRATION/SET-EMAIL":
            return {
                ...state, email: action.email
            }
        case "REGISTRATION/SET-PASS":
            return {
                ...state, password: action.password
            }
        case "REGISTRATION/SET-REPEAT-PASS":
            return {
                ...state, repeatPassword: action.repeatPassword
            }
        case "REGISTRATION/SET-MESSAGE":
            return {
                ...state, message: action.message
            }
        default:
            return state
    }

}
export const setEmailAC = (email: string) => ({type: 'REGISTRATION/SET-EMAIL', email} as const)
export const setPasswordAC = (password: string) => ({type: 'REGISTRATION/SET-PASS', password} as const)
export const setRepeatPasswordAC = (repeatPassword: string) => ({
    type: 'REGISTRATION/SET-REPEAT-PASS',
    repeatPassword
} as const)
export const setMessageAC = (message: string) => ({type: 'REGISTRATION/SET-MESSAGE', message} as const)

export const registrationTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.register(data).then(response => {
        dispatch(setMessageAC('success'))
    }).catch(error => {
        dispatch(setMessageAC(error))
    })
}


export type SetEmailActionType = ReturnType<typeof setEmailAC>
export type SetPasswordActionType = ReturnType<typeof setPasswordAC>
export type SetRepeatPasswordActionType = ReturnType<typeof setRepeatPasswordAC>
export type SetMessageActionType = ReturnType<typeof setMessageAC>
export type TotalActionType =
    SetEmailActionType
    | SetPasswordActionType
    | SetRepeatPasswordActionType
    | SetMessageActionType