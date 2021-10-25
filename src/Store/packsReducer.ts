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
}


export const packsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {
                ...state,
                ...action.data
            }
        case "CARDS/SET-CURRENT-PAGE":
            return {...state, page: action.currentPage}
        default:
            return state
    }
}

// actions
export const setDataPacksAC = (data: cardsPacksResponse) => ({type: 'PACKS/SET-PACKS', data} as const)

//thunks
export const fetchPacksTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let {sortPacks, page, pageCount} = getState().packs
    packsAPI.getPacks(pageCount, page, sortPacks).then((response) => {
        dispatch(setDataPacksAC(response.data))
    })
}
//types
export type InitialStateType = {
    cardPacks: cardsPacksType[],
    cardPacksTotalCount: null | number,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page: number,
    pageCount: number,
    sortPacks: string
}
export type setDataPacksActionType = ReturnType<typeof setDataPacksAC>
export type TotalActionType =
    | setDataPacksActionType
    | setCurrentPageActionType
