import {Dispatch} from "redux";
import {cardsAPI, cardsResponse, cardsType, packsAPI} from "../common/Api/api";
import {AppRootStateType} from "./redux-store";
import {fetchPacksTC, setErrorMessagePuckAC} from "./packsReducer";

export const initialState = {
    cardsPack_id: '',
    cards: [],
    cardsTotalCount: null,
    maxGrade: null,
    minGrade: null,
    page: 1,
    pageCount: 100,
    packUserId: '615328794022038ed07f6373',
    sortPacks: '0updated'
}

export const cardsReducer = (state: InitialStateType = initialState, action: TotalActionType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

//actions
export const setDataCardsAC = (data: cardsResponse) => ({type: 'CARDS/SET-CARDS', data} as const)
//thunks
export const fetchCardsTC = (id: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let sortPacks = getState().cards.sortPacks
    let page = getState().cards.page
    let pageCount = getState().cards.pageCount
    cardsAPI.getCards(id, pageCount, page, sortPacks).then((response) => {
        dispatch(setDataCardsAC(response.data))
    })
}
export const addCardTC = (cardsPack_id: string) => (dispatch: Dispatch<any>) => {
    const card = {
        cardsPack_id
    }
    cardsAPI.addCard(card).then(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }).catch((error) => {
            console.log(error.response.data.error)
        }
    )
}
export const delCardTC = (idPuck: string, idCard: string) => (dispatch: Dispatch<any>) => {
    cardsAPI.deleteCard(idCard).then(() => {
        dispatch(fetchCardsTC(idPuck))
    }).catch((error) => {
            console.log(error.response.data.error)
        }
    )
}
export const updateCardNameTC = (idPuck: string, idCard: string, name: string) => (dispatch: Dispatch<any>) => {
    const card = {
        _id: idCard, question: name
    }
    cardsAPI.updateCard(card).then(() => {
        dispatch(fetchCardsTC(idPuck))
    }).catch((error) => {
            dispatch(setErrorMessagePuckAC(error.response.data.error))
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
}
export type setDataCardsActionType = ReturnType<typeof setDataCardsAC>
export type TotalActionType = setDataCardsActionType
