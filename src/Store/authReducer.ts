import {authAPI, LoginParamsType} from "../common/Api/api";
import {Dispatch} from "redux";
import {initializeAppTC, setAppStatusAC, SetAppStatusActionType, setLockButtonAC} from "./appReducer";

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
    dispatch(setLockButtonAC(true))
    dispatch(setAppStatusAC("loading"))
    authAPI.login(data)
        .then(() => {
            dispatch(initializeAppTC())
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorMessageAC(error))
        }).finally(()=>{
        dispatch(setLockButtonAC(false))
    })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setLockButtonAC(true))
    dispatch(setAppStatusAC("loading"))
    authAPI.logout()
        .then(() => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC("succeeded"))
        }).finally(()=>{
        dispatch(setLockButtonAC(false))
    })

}

//types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>

type ActionsType =
    | SetIsLoggedInActionType
    | SetErrorMessageActionType
    | SetAppStatusActionType