import {Dispatch} from "redux";
import {authAPI, UserData} from "../common/Api/api";
import {setIsLoggedInAC, SetIsLoggedInActionType} from "./authReducer";
import {AppRootStateType} from "./redux-store";

const initialState = {
    status: 'succeeded' as RequestStatusType,
    isInitialized: false,
    data: {} as UserData,
    lockButton: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status};
        case "APP/SET-APP-INITIALIZED":
            return {...state, isInitialized: action.value}
        case "login/SET-DATA-PROFILE":
            return {...state, data: action.data}
        case "REGISTRATION/LOCK-BUTTON":
            return {...state, lockButton: action.lockButton}
        default:
            return state
    }
}

//actions
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setIsInitializedAC = (value: boolean) => ({type: 'APP/SET-APP-INITIALIZED', value} as const)
export const setDataProfileAC = (data: UserData) => ({type: 'login/SET-DATA-PROFILE', data} as const)
export const setLockButtonAC = (lockButton: boolean) => ({type: 'REGISTRATION/LOCK-BUTTON', lockButton} as const)

//thunks
export const initializeAppTC = () => (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    authAPI.me()
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setDataProfileAC(res.data))
            console.log(getState().app.isInitialized)
        }).catch((e) => {
        console.error(e)
    })
        .finally(() => {
            dispatch(setIsInitializedAC(true))
        })
}

//types
export type RequestStatusType = 'loading' | 'succeeded'
type InitialStateType = typeof initialState
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetDataProfileActionType = ReturnType<typeof setDataProfileAC>
export type SetLockButtonActionType = ReturnType<typeof setLockButtonAC>
type ActionsType =
    | SetAppStatusActionType
    | SetAppErrorActionType
    | SetIsLoggedInActionType
    | ReturnType<typeof setIsInitializedAC>
    | SetDataProfileActionType
    | SetLockButtonActionType