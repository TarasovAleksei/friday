import React, {useEffect, useState} from 'react';
import {Packs} from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {
    addPackTC,
    delPackTC,
    fetchPacksTC,
    InitialStateType,
    setErrorMessagePuckAC, setPrivatePacksAC,
    setSearchPacksAC,
    sortAC,
    updatePackNameTC
} from "../../Store/packsReducer";
import {AppRootStateType} from "../../Store/redux-store";
import {setCurrentPageAC} from "../../Store/cardsReducer";
import {UserData} from "../../common/Api/api";


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
        showPrivatePacks
    } = useSelector<AppRootStateType, InitialStateType>(state => state.packs)
    const data = useSelector<AppRootStateType, UserData>(state => state.app.data)
    const [sortPointer, setSortPointer] = useState<null | '▲' | '▼'>(null)
    const [searchPack, setSearchPack] = useState("");
    const dispatch = useDispatch()
    const [showModalAddPack, setShowModalAddPack] = useState(false);
    const [showModalDellPack, setShowModalDellPack] = useState(false);
    const [showModalUpdatePack, setShowModalUpdatePack] = useState(false);
    const [idForModal, setIdForModal] = useState('');
    const [nameForModal, setNameForModal] = useState('');
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
        showPrivatePacks
    ])

    const addPackCB = (name: string) => {
        dispatch(addPackTC(name))
    }
    const delPackCB = () => {
        dispatch(delPackTC(idForModal))
    }
    const updatePackNameCB = (newName:string) => {
        dispatch(updatePackNameTC(idForModal, newName))
    }
    const sortClick = (sortPacks: string) => {
        dispatch(sortAC(sortPacks))
    }
    const onSortClick = () => {
        if (sortPacks === '0updated') {
            sortClick('1updated')
            setSortPointer('▲')
        } else {
            sortClick('0updated')
            setSortPointer('▼')
        }
    }
    const callSetSearchPack = (value: string) => {
        setSearchPack(value);
        dispatch(setSearchPacksAC(searchPack));
    }
    const getSearchPacks = () => {
        dispatch(fetchPacksTC())
    }
    const changePrivatePacks = () => {
        dispatch(setPrivatePacksAC(!showPrivatePacks))
    }
    const changeShowModalAdd = () => {
        setShowModalAddPack(!showModalAddPack)
    }
    const changeShowModalDell = () => {
        setShowModalDellPack(!showModalDellPack)
    }
    const changeShowModalUpdate = () => {
        setShowModalUpdatePack(!showModalUpdatePack)
    }
    const onChangeId = (id: string) => {
        setIdForModal(id)
    }
    const onChangeNamePack = (name: string) => {
        setNameForModal(name)
    }
    return (
        <>
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
                onSortClick={onSortClick}
                sortPointer={sortPointer}
                callSetSearchPack={callSetSearchPack}
                getSearchPacks={getSearchPacks}
                data={data}
                showPrivatePacks={showPrivatePacks}
                changePrivatePacks={changePrivatePacks}
                showModalAddPack={showModalAddPack}
                changeShowModalAdd={changeShowModalAdd}
                changeShowModalDell={changeShowModalDell}
                showModalDellPack={showModalDellPack}
                idForDellModal={idForModal}
                nameForDellModal={nameForModal}
                onChangeId={onChangeId}
                onChangeNamePack={onChangeNamePack}
                showModalUpdatePack={showModalUpdatePack}
                changeShowModalUpdate={changeShowModalUpdate}
            />
        </>

    );
};