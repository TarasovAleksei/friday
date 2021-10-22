import {Dispatch} from "redux";
import {authAPI, ForgotData, NewPassData} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";
import {setAppStatusAC, setLockButtonAC} from "./appReducer";

export type InitialStateType = typeof initialState;
export const initialState = {
    email: '',
    from: "test-front-admin <ai73a@yandex.by>",
    message: `<div style="background-color: lime; padding: 15px">
                password recovery link:
                <a href='https://tarasovaleksei.github.io/friday/#/newpassword/$token$'>
                link</a></div>`,
    testMessage: '' as string | null
}

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD/SET-EMAIL":
            return {...state, email: action.email}
        case "FORGOT-PASSWORD/SET-TEST-MESSAGE":
            return {...state, testMessage: action.testMessage}
        default:
            return state
    }
}

//actions
export const setLoginAC = (email: string) => ({type: 'FORGOT-PASSWORD/SET-EMAIL', email} as const)
export const setTestMessageAC = (testMessage: string | null) => ({
    type: 'FORGOT-PASSWORD/SET-TEST-MESSAGE',
    testMessage
} as const)

//thunks
export const loginVerificationTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(setLockButtonAC(true))
    const data: ForgotData = {
        email: getState().forgotPassword.email,
        from: getState().forgotPassword.from,
        message: getState().forgotPassword.message,
    }
    authAPI.forgot(data)
        .then(() => {
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch((error) => {
            console.log(error.response.data.error)
        }).finally(() => {
        dispatch(setLockButtonAC(false))
        dispatch(setAppStatusAC(''))
    })
}

export const setNewPassTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch<any>) => {
    dispatch(setLockButtonAC(true))
    dispatch(setAppStatusAC("loading"))
    const data: NewPassData = {
        password,
        resetPasswordToken
    }
    authAPI.setNewPass(data)
        .then(() => {
            dispatch(setTestMessageAC('success'))
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch((error) => {
            dispatch(setTestMessageAC(error.response.data.error))
        }).finally(() => {
        dispatch(setLockButtonAC(false))
        dispatch(setAppStatusAC(''))
    })
}

//types
export type SetEmailActionType = ReturnType<typeof setLoginAC>
export type SetTestMessageActionType = ReturnType<typeof setTestMessageAC>
export type TotalActionType = SetEmailActionType | SetTestMessageActionType