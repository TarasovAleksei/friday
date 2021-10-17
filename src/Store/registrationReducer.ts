import {Dispatch} from "redux";
import {authAPI, LoginType} from "../common/Api/api";

export type InitialStateType = typeof initialState;
export const initialState = {
    message: '',
}

export const registrationReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case "REGISTRATION/SET-MESSAGE":
            return {
                ...state, message: action.message
            }
        default:
            return state
    }

}

export const setMessageAC = (message: string) => ({type: 'REGISTRATION/SET-MESSAGE', message} as const)


export const registrationTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.register(data).then(response => {
        dispatch(setMessageAC('loading'))
        dispatch(setMessageAC('success'))
    }).catch((error) => {
        dispatch(setMessageAC(error.response.data.error))
        console.log(error.response.data.error)
    })
}

export type SetMessageActionType = ReturnType<typeof setMessageAC>
export type TotalActionType =
    | SetMessageActionType