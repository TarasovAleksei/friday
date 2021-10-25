import React, {useEffect} from 'react';
import {Cards} from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardsTC, InitialStateType, setCurrentPageAC} from "../../Store/cardsReducer";
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
    }, [cardsPack_id, pageCount, page, sortPacks])

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
        />
    );
};
export type ParamsType = {
    cardsPack_id: string
}
