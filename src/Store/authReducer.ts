import {authAPI, LoginParamsType, UserData} from "../common/Api/api";
import {Dispatch} from "redux";

export type InitialStateType = typeof initialState
const initialState = {
    isLoggedIn: false,
    errorMessage: '',
    data: {} as UserData
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        case "login/SET-ERROR-MESSAGE":
            return {...state, errorMessage: action.message}
        case "login/SET-DATA-PROFILE":
            return {...state, data: action.data}
        default:
            return state
    }
}

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setErrorMessageAC = (message: string) => ({type: 'login/SET-ERROR-MESSAGE', message} as const)
export const setDataProfileAC = (data: UserData) => ({type: 'login/SET-DATA-PROFILE', data} as const)

//thunks
export const authTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setDataProfileAC(res.data))
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
export type SetDataProfileActionType = ReturnType<typeof setDataProfileAC>
type ActionsType =
    | SetIsLoggedInActionType
    | SetErrorMessageActionType
    | SetDataProfileActionType