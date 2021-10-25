import {Dispatch} from "redux";
import {cardsPacksResponse, cardsPacksType, packsAPI} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";


export const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: 1,
    pageCount: 100,
    sortPacks: '0updated',
    message: ''
}


export const packsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, ...action.data}
        case "PACKS/SET-MESSAGE":
            return {...state, message: action.message}
        default:
            return state
    }
}

// actions
export const setDataPacksAC = (data: cardsPacksResponse) => ({type: 'PACKS/SET-PACKS', data} as const)
export const setErrorMessagePuckAC = (message: string) => ({type: 'PACKS/SET-MESSAGE', message} as const)
//thunks
export const fetchPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setErrorMessagePuckAC(''))
    let {sortPacks, page, pageCount} = getState().packs
    packsAPI.getPacks(pageCount, page, sortPacks).then((response) => {
        dispatch(setDataPacksAC(response.data))
    }).catch((error) => {
            dispatch(setErrorMessagePuckAC(error.response.data.error))
        }
    )
}
export const addPackTC = (name: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessagePuckAC(''))
    const cardsPack = {
        name
    }
    packsAPI.addPack(cardsPack).then(() => {
        dispatch(fetchPacksTC())
    }).catch((error) => {
            dispatch(setErrorMessagePuckAC(error.response.data.error))
        }
    )
}
export const delPackTC = (id: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessagePuckAC(''))

    packsAPI.deletePack(id).then(() => {
        dispatch(fetchPacksTC())
    }).catch((error) => {
            dispatch(setErrorMessagePuckAC(error.response.data.error))
        }
    )
}
export const updatePackNameTC = (_id: string, name: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessagePuckAC(''))
    const cardsPuck = {
        _id, name
    }
    packsAPI.updatePack(cardsPuck).then(() => {
        dispatch(fetchPacksTC())
    }).catch((error) => {
            dispatch(setErrorMessagePuckAC(error.response.data.error))
        }
    )
}
//types
export type InitialStateType = {
    cardPacks: cardsPacksType[],
    cardPacksTotalCount: null | number,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page: number,
    pageCount: number,
    sortPacks: string,
    message: string
}
export type setDataPacksActionType = ReturnType<typeof setDataPacksAC>
export type setErrorMessagePuckActionType = ReturnType<typeof setErrorMessagePuckAC>
export type TotalActionType = setDataPacksActionType | setErrorMessagePuckActionType
