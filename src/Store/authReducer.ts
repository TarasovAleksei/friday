import {authAPI, LoginParamsType} from "../common/Api/api";
import {Dispatch} from "redux";
import {initializeAppTC, setAppStatusAC, SetAppStatusActionType} from "./appReducer";

export type InitialStateType = typeof initialState
const initialState = {
    isLoggedIn: false,
    errorMessage: '',
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
export const authTC = (data: LoginParamsType) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatusAC("loading"))

    authAPI.login(data)

        .then(() => {
            debugger
            dispatch(initializeAppTC())
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(e => {
            debugger
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorMessageAC(error))
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.logout()
        .then(() => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC("succeeded"))
        })

}

//types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>

type ActionsType =
    | SetIsLoggedInActionType
    | SetErrorMessageActionType
    | SetAppStatusActionType