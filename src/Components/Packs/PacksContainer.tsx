import React, {useEffect} from 'react';
import {Packs} from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {
    addPackTC,
    delPackTC,
    fetchPacksTC,
    InitialStateType,
    setErrorMessagePuckAC,
    updatePackNameTC
} from "../../Store/packsReducer";
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
        sortPacks,
        message,
    } = useSelector<AppRootStateType, InitialStateType>(state => state.packs)

    const dispatch = useDispatch()

    const onChangePage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    useEffect(() => {
        dispatch(fetchPacksTC())
        return () => {
            dispatch(setErrorMessagePuckAC(''))
        }
    }, [
        maxCardsCount,
        minCardsCount,
        pageCount,
        sortPacks,
        page,
    ])
    const addPackCB = (name: string) => {
        dispatch(addPackTC(name))
    }
    const delPackCB = (id: string) => {
        dispatch(delPackTC(id))
    }
    const updatePackNameCB = (id: string, name: string) => {
        dispatch(updatePackNameTC(id, name))
    }

    return (
        <Packs
            cardPacks={cardPacks}
            cardPacksTotalCount={cardPacksTotalCount}
            maxCardsCount={maxCardsCount}
            minCardsCount={minCardsCount}
            pageCount={pageCount}
            page={page}
            errorMessage={message}
            addPackCB={addPackCB}
            delPackCB={delPackCB}
            updatePackNameCB={updatePackNameCB}
            onChangePage={onChangePage}
        />
    );
};
