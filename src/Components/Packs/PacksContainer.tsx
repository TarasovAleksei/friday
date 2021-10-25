import React, {useEffect} from 'react';
import {Packs} from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {fetchPacksTC, InitialStateType} from "../../Store/packsReducer";
import {AppRootStateType} from "../../Store/redux-store";
import {setCurrentPageAC} from "../../Store/cardsReducer";


export const PacksContainer = () => {
    const {
        cardPacks,
        cardPacksTotalCount,
        maxCardsCount,
        minCardsCount,
        pageCount,
        page,
        sortPacks
    } = useSelector<AppRootStateType, InitialStateType>(state => state.packs)

    const dispatch = useDispatch()

    const onChangePage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [pageCount, page, sortPacks])


    return (
        <Packs
            cardPacks={cardPacks}
            cardPacksTotalCount={cardPacksTotalCount}
            maxCardsCount={maxCardsCount}
            minCardsCount={minCardsCount}
            pageCount={pageCount}
            page={page}
            onChangePage={onChangePage}
        />
    );
};
