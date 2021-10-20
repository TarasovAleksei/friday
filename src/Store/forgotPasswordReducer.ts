import {Dispatch} from "redux";
import {authAPI, ForgotData, NewPassData} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";

export type InitialStateType = typeof initialState;
export const initialState = {
    email: '',
    from: "test-front-admin <ai73a@yandex.by>",
    message: `<div style="background-color: lime; padding: 15px">
                password recovery link:
                <a href='http://localhost:3000/#/newpassword/$token$'>
                link</a></div>`,
}

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD/SET-EMAIL":
            return {
                ...state, email: action.email
            }
        default:
            return state
    }

}
export const setLoginAC = (email: string) => ({type: 'FORGOT-PASSWORD/SET-EMAIL', email} as const)
export const setTokenAC = (tokenForPass: string) => ({type: 'FORGOT-PASSWORD/SET-TOKEN', tokenForPass} as const)
export const setNewPassAC = (newPassword: string) => ({type: 'FORGOT-PASSWORD/SET-NEW_PASS', newPassword} as const)

export const loginVerificationTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const data: ForgotData = {
        email: getState().forgotPassword.email,
        from: getState().forgotPassword.from,
        message: getState().forgotPassword.message,
    }
    authAPI.forgot(data)
        .then(response => {
        })
        .catch((error) => {
        console.log(error.response.data.error)
    })
}
export const setNewPassTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch<any>) => {
    const data: NewPassData = {
        password,
        resetPasswordToken
    }
    authAPI.setNewPass(data)
        .then((res) => {
        console.log(res.info)
    })
        .catch((error) => {
        console.log(error.response.data.error)
    })
}

export type SetEmailActionType = ReturnType<typeof setLoginAC>

export type TotalActionType = SetEmailActionType