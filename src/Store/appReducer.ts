import {Dispatch} from "redux";
import {getAuthMeTC, SetIsLoggedInActionType} from "./authReducer";

const initialState = {
    status: 'succeeded' as RequestStatusType,
    isInitialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status};
        case "APP/SET-APP-INITIALIZED":
            return {...state, isInitialized: true}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setIsInitializedAC = () => ({type: 'APP/SET-APP-INITIALIZED'} as const)


export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthMeTC())
    Promise.all([promise]).then(() => {
        dispatch(setIsInitializedAC())
    })
}

export type RequestStatusType = 'loading' | 'succeeded'
type InitialStateType = typeof initialState

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
type ActionsType =
    | SetAppStatusActionType
    | SetAppErrorActionType
    | SetIsLoggedInActionType
    | ReturnType<typeof setIsInitializedAC>