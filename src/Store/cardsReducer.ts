import {Dispatch} from "redux";
import {cardsAPI, cardsResponse, cardsType} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";


export const initialState = {
    cardsPack_id: '',
    cards: [],
    cardsTotalCount: null,
    maxGrade: null,
    minGrade: null,
    page: 1,
    pageCount: 8,
    packUserId: '615328794022038ed07f6373',
    sortPacks: '0updated',
    message: ''
}

export const cardsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS':
            return {...state, ...action.data}
        case "CARDS/SET-CURRENT-PAGE":
            return {...state, page: action.currentPage}
        case "CARDS/SET-MESSAGE":
            return {...state, message: action.message}
        default:
            return state
    }
}

//actions
export const setDataCardsAC = (data: cardsResponse) => ({type: 'CARDS/SET-CARDS', data} as const)
export const setCurrentPageAC = (page: number) => ({type: 'CARDS/SET-CURRENT-PAGE', currentPage: page} as const)
export const setErrorMessageCardAC = (message: string) => ({type: 'CARDS/SET-MESSAGE', message} as const)
//thunks
export const fetchCardsTC = (id: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(setErrorMessageCardAC(''))
    let sortPacks = getState().cards.sortPacks
    let page = getState().cards.page
    let pageCount = getState().cards.pageCount
    cardsAPI.getCards(id, pageCount, page, sortPacks).then((response) => {
        dispatch(setDataCardsAC(response.data))
    }).catch((error) => {
            dispatch(setErrorMessageCardAC(error.response.data.error))
        }
    )
}
export const addCardTC = (cardsPack_id: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessageCardAC(''))
    const card = {
        cardsPack_id
    }
    cardsAPI.addCard(card).then(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }).catch((error) => {
            dispatch(setErrorMessageCardAC(error.response.data.error))
        }
    )
}
export const delCardTC = (idPuck: string, idCard: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessageCardAC(''))
    cardsAPI.deleteCard(idCard).then(() => {
        dispatch(fetchCardsTC(idPuck))
    }).catch((error) => {
            dispatch(setErrorMessageCardAC(error.response.data.error))
        }
    )
}
export const updateCardNameTC = (idPuck: string, idCard: string, name: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessageCardAC(''))
    const card = {
        _id: idCard, question: name
    }
    cardsAPI.updateCard(card).then(() => {
        dispatch(fetchCardsTC(idPuck))
    }).catch((error) => {
            dispatch(setErrorMessageCardAC(error.response.data.error))
        }
    )
}
//types
export type InitialStateType = {
    cardsPack_id: string
    cards: cardsType[],
    cardsTotalCount: null | number
    maxGrade: null | number
    minGrade: null | number
    page: number
    pageCount: number
    packUserId: string
    sortPacks: string
    message:string
}
export type setDataCardsActionType = ReturnType<typeof setDataCardsAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setErrorMessageCardActionType = ReturnType<typeof setErrorMessageCardAC>
export type TotalActionType =
    | setDataCardsActionType
    | setCurrentPageActionType
    | setErrorMessageCardActionType
