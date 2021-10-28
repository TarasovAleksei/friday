import {Dispatch} from "redux";
import {cardsPacksResponse, cardsPacksType, packsAPI} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";
import {setCurrentPageActionType} from "./cardsReducer";


export const initialState: InitialStateType = {
    cardPacks: [],
    // filteredCardPacks: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: 1,
    pageCount: 10,
    sortPacks: '0updated',
    message: '',
}


export const packsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, ...action.data}
        case "PACKS/SET-MESSAGE":
            return {...state, message: action.message}
        case "CARDS/SET-CURRENT-PAGE":
            return {...state, page: action.currentPage}
        // case "PACKS/FILTER-PACKS":
        //     const regExp = new RegExp(action.searchValue, 'i');
        //     return {
        //         ...state,
        //         filteredCardPacks: [
        //             ...state.cardPacks.filter(pack =>
        //                 Object.values(pack).some(el => regExp.test(el))
        //             )],
        //     };
        case "PACKS/SORT": {
            return {
                ...state,
                sortPacks: state.sortPacks === '0updated' ? '1updated' : '0updated'
            }
        }
        default:
            return state
    }
}

// actions
export const filterAC = (searchValue: string) => ({
    type: 'PACKS/FILTER-PACKS',
    searchValue,
} as const)
export const setDataPacksAC = (data: cardsPacksResponse) => ({type: 'PACKS/SET-PACKS', data} as const)
export const setErrorMessagePuckAC = (message: string) => ({type: 'PACKS/SET-MESSAGE', message} as const)
export const sortAC = (sortPacks: string) => ({type: 'PACKS/SORT', sortPacks} as const)

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
    // filteredCardPacks: cardsPacksType[],
    cardPacksTotalCount: null | number,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page: number,
    pageCount: number,
    sortPacks: string,
    message: string,
}
export type setDataPacksActionType = ReturnType<typeof setDataPacksAC>
export type setErrorMessagePuckActionType = ReturnType<typeof setErrorMessagePuckAC>
export type filterActionType = ReturnType<typeof filterAC>
export type sortActionType = ReturnType<typeof sortAC>

export type TotalActionType =
    setDataPacksActionType
    | setErrorMessagePuckActionType
    | setCurrentPageActionType
    | filterActionType
    | sortActionType