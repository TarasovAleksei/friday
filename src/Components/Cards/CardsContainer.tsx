import React, {useEffect, useState} from 'react';
import {Cards} from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {setErrorMessagePuckAC} from "../../Store/packsReducer";
import {addCardTC, delCardTC, fetchCardsTC, updateCardNameTC} from "../../Store/cardsReducer";
import {InitialStateType, setCurrentPageAC} from "../../Store/cardsReducer";
import {AppRootStateType} from "../../Store/redux-store";
import {useParams} from "react-router-dom";
import {UserData} from "../../common/Api/api";


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
        minGrade,
        message,
    } = useSelector<AppRootStateType, InitialStateType>(state => state.cards)
    const userId = useSelector<AppRootStateType, string>(state => state.app.data._id)
    const [showModalAddCard, setShowModalAddCard] = useState(false);
    const [showModalDellCard, setShowModalDellCard] = useState(false);
    const [showModalUpdateCard, setShowModalUpdateCard] = useState(false);
    const [idForModal, setIdForModal] = useState('');
    const [nameForModal, setNameForModal] = useState('');
    const [newCardAnswer, setNewCardAnswer] = useState('')
    const cardURL = useParams<ParamsType>().cardsPack_id

    const dispatch = useDispatch()
    const changeShowModalAdd = () => {
        setShowModalAddCard(!showModalAddCard)
    }
    const changeShowModalDell = () => {
        setShowModalDellCard(!showModalDellCard)
    }
    const changeShowModalUpdate = () => {
        setShowModalUpdateCard(!showModalUpdateCard)
    }
    const onChangePage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }
    const onChangeId = (id: string) => {
        setIdForModal(id)
    }
    const onChangeNameCard = (name: string) => {
        setNameForModal(name)
    }
    const onChangeNewAnswer = (answer: string) => {
        setNewCardAnswer(answer)
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchCardsTC(cardURL))
        }, 2000)

        return () => {
            dispatch(setErrorMessagePuckAC(''))
        }
    }, [sortPacks, pageCount, page, maxGrade, minGrade])
    const addCardCB = (id: string, question: string, answer: string) => {
        dispatch(addCardTC(id, question, answer))
    }
    const delCardCB = () => {
        dispatch(delCardTC(cardURL, idForModal))
    }
    const updateCardCB = () => {
        dispatch(updateCardNameTC(cardURL, idForModal, nameForModal, newCardAnswer))
    }
    return (
        <Cards
            userId={userId}
            cards={cards}
            cardsPack_id={cardURL}
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
            message={message}
            showModalAddCard={showModalAddCard}
            showModalDellCard={showModalDellCard}
            showModalUpdateCard={showModalUpdateCard}
            changeShowModalAdd={changeShowModalAdd}
            changeShowModalDell={changeShowModalDell}
            changeShowModalUpdate={changeShowModalUpdate}
            nameForModal={nameForModal}
            onChangeId={onChangeId}
            onChangeNameCard={onChangeNameCard}
            newCardAnswer={newCardAnswer}
            onChangeNewAnswer={onChangeNewAnswer}
        />
    );
};
export type ParamsType = {
    cardsPack_id: string
}
