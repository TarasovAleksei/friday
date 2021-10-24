import React, {useEffect} from 'react';
import {Packs} from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {fetchPacksTC, InitialStateType} from "../../Store/packsReducer";
import {AppRootStateType} from "../../Store/redux-store";


export const PacksContainer = () => {
    const {
        cardPacks,
        cardPacksTotalCount,
        maxCardsCount,
        minCardsCount,
        pageCount,
        page
    } = useSelector<AppRootStateType, InitialStateType>(state => state.packs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])


    return (
        <Packs
            cardPacks={cardPacks}
            cardPacksTotalCount={cardPacksTotalCount}
            maxCardsCount={maxCardsCount}
            minCardsCount={minCardsCount}
            pageCount={pageCount}
            page={page}
        />
    );
};
