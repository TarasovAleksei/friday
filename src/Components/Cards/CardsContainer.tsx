import React, {useEffect} from 'react';
import {Cards} from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {setErrorMessagePuckAC, sortAC} from "../../Store/packsReducer";
import {addCardTC, delCardTC, fetchCardsTC, updateCardNameTC} from "../../Store/cardsReducer";
import {InitialStateType, setCurrentPageAC} from "../../Store/cardsReducer";
import {AppRootStateType} from "../../Store/redux-store";
import {useParams} from "react-router-dom";


export const CardsContainer = () => {
    const {
        cards,
        cardsPack_id,
        sortPacks,
        packUserId,
        cardsTotalCount,
        pageCount,
        page,
        maxGrade,
        minGrade
    } = useSelector<AppRootStateType, InitialStateType>(state => state.cards)

    const cardURL = useParams<ParamsType>().cardsPack_id

    const dispatch = useDispatch()

    const onChangePage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    useEffect(() => {
        dispatch(fetchCardsTC(cardURL))
        return () => {
            dispatch(setErrorMessagePuckAC(''))
        }
    }, [sortPacks, pageCount, page, maxGrade, minGrade])
    const addCardCB = (id: string) => {
        dispatch(addCardTC(id))
    }
    const delCardCB = (idPuck: string, idCard: string) => {
        dispatch(delCardTC(idPuck, idCard))
    }
    const updateCardCB = (idPuck: string, idCard: string, name: string) => {
        dispatch(updateCardNameTC(idPuck, idCard, name))
    }
    return (
        <Cards
            cards={cards}
            cardsPack_id={cardsPack_id}
            cardsTotalCount={cardsTotalCount}
            maxGrade={maxGrade}
            minGrade={minGrade}
            packUserId={packUserId}
            page={page}
            pageCount={pageCount}
            sortPacks={sortPacks}
            onChangePage={onChangePage}
            cardURL={cardURL}
            addCardCB={addCardCB}
            delCardCB={delCardCB}
            updateCardCB={updateCardCB}
        />
    );
};
export type ParamsType = {
    cardsPack_id: string
}
