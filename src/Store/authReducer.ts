import {authAPI, LoginParamsType} from "../common/Api/api";
import {Dispatch} from "redux";

export type InitialStateType = typeof initialState
const initialState = {
    isLoggedIn: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)

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
        })
}
//types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
type ActionsType =
    | SetIsLoggedInActionType