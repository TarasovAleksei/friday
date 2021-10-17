import {authAPI, LoginParamsType} from "../common/Api/api";
import {Dispatch} from "redux";

export type InitialStateType = typeof initialState
const initialState = {
    isLoggedIn: false,
    errorMessage: ''
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        case "login/SET-ERROR-MESSAGE":
            return {...state, errorMessage: action.message}
        default:
            return state
    }
}

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setErrorMessageAC = (message: string) => ({type: 'login/SET-ERROR-MESSAGE', message} as const)

//thunks
export const authTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorMessageAC(error))
        })
}
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
        })
        .catch()
}

//types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>
type ActionsType =
    | SetIsLoggedInActionType
    | SetErrorMessageActionType