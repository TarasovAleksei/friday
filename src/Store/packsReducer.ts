import {Dispatch} from "redux";
import {cardsPacksResponse, cardsPacksType, packsAPI} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";
import {setCurrentPageActionType} from "./cardsReducer";


export const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: 1,
    pageCount: 10,
    sortPacks: '0updated',
    message: '',
    searchPacks: '',
}


export const packsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, ...action.data}
        case "PACKS/SET-MESSAGE":
            return {...state, message: action.message}
        case "CARDS/SET-CURRENT-PAGE":
            return {...state, page: action.currentPage}
        case "PACKS/SORT": {
            return {
                ...state,
                sortPacks: state.sortPacks === '0updated' ? '1updated' : '0updated'
            }
        }
        case "SET_SEARCH_PACKS":
            return { ...state, searchPacks: action.searchValue };
        default:
            return state
    }
}

// actions
export const setDataPacksAC = (data: cardsPacksResponse) => ({type: 'PACKS/SET-PACKS', data} as const)
export const setErrorMessagePuckAC = (message: string) => ({type: 'PACKS/SET-MESSAGE', message} as const)
export const sortAC = (sortPacks: string) => ({type: 'PACKS/SORT', sortPacks} as const)
export const setSearchPacksAC = (searchValue: string) => ({type: "SET_SEARCH_PACKS", searchValue} as const)

//thunks
export const fetchPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setErrorMessagePuckAC(''))
    let {sortPacks, page, pageCount, searchPacks} = getState().packs
    packsAPI.getPacks(pageCount, page, sortPacks, searchPacks).then((response) => {
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
    message: string,
    searchPacks: string,
}
export type setDataPacksActionType = ReturnType<typeof setDataPacksAC>
export type setErrorMessagePuckActionType = ReturnType<typeof setErrorMessagePuckAC>
export type sortActionType = ReturnType<typeof sortAC>
export type setSearchPacksActionType = ReturnType<typeof setSearchPacksAC>

export type TotalActionType =
    setDataPacksActionType
    | setErrorMessagePuckActionType
    | setCurrentPageActionType
    | sortActionType
    | setSearchPacksActionType