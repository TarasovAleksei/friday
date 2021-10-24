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
    pageCount: 100,
    packUserId: '615328794022038ed07f6373',
    sortPacks:'0updated'
}

export const cardsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS':
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

//actions
export const setDataCardsAC = (data: cardsResponse) => ({type: 'CARDS/SET-CARDS', data} as const)
//thunks
export const fetchCardsTC = (cardURL:string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let sortPacks = getState().cards.sortPacks
    let cardsPack_id = cardURL
    let page = getState().cards.page
    let pageCount = getState().cards.pageCount
    cardsAPI.getCards(cardsPack_id, pageCount,page, sortPacks).then((response) => {
        dispatch(setDataCardsAC(response.data))
    })
}

//types
export type InitialStateType = {
    cardsPack_id: string
    cards: cardsType[],
    cardsTotalCount: null|number
    maxGrade: null|number
    minGrade: null|number
    page: number
    pageCount: number
    packUserId: string
    sortPacks:string
}
export type setDataCardsActionType = ReturnType<typeof setDataCardsAC>
export type TotalActionType=setDataCardsActionType
