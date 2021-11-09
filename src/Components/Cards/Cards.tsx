import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsType} from "../../common/Api/api";
import Pagination from 'rc-pagination';
import {localInfo} from '../../common/locale/en_US';
import '../../common/PaginationStyles/Pagination.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';
import s from './Cards.module.css';
import {ModalAddCardContainer} from "../../common/Modal/ModalAddCardContainer";
import * as cluster from "cluster";
import {ModalDellCardContainer} from "../../common/Modal/ModalDellCardContainer";
import {ModalUpdateCardContainer} from "../../common/Modal/ModalUpdateCardContainer";


export const Cards: React.FC<PropsType> = ({
                                               cards, userId,
                                               cardsPack_id,
                                               page,
                                               pageCount,
                                               cardsTotalCount,
                                               sortPacks,
                                               packUserId,
                                               maxGrade,
                                               minGrade,
                                               addCardCB,
                                               cardURL,
                                               delCardCB,
                                               updateCardCB,
                                               onChangePage,
                                               message, showModalAddCard,
                                               showModalDellCard,
                                               showModalUpdateCard,
                                               changeShowModalAdd,
                                               changeShowModalDell,
                                               changeShowModalUpdate,
                                               nameForModal,
                                               onChangeId,
                                               onChangeNameCard,
                                               newCardAnswer,
                                               onChangeNewAnswer,
                                           }) => {

    let table = cards.map(function (item) {
        return <tr key={item._id}>
            <td>{item.question}</td>
            <td>{item.answer}</td>
            <td>{item.grade}</td>
            <td>{item.updated.substr(0, 10)}</td>
            <td> {<>
                {item.user_id === userId &&
                <SuperButton className={s.btnDel} onClick={() => {
                    onChangeId(item._id)
                    onChangeNameCard(item.question)
                    changeShowModalDell()
                }} name={'del'}/>
                }
                {
                    item.user_id === userId && <SuperButton className={s.btnEdit} onClick={() => {
                        onChangeId(item._id)
                        onChangeNameCard(item.question)
                        onChangeNewAnswer(item.answer)
                        changeShowModalUpdate()
                    }} name={'Edit'}/>
                }

            </>}
            </td>
        </tr>
    });
    return (

        <>
            <HeaderContainer/>
            <ModalAddCardContainer cardsPack_id={cardsPack_id}
                                   show={showModalAddCard}
                                   changeShowModalAdd={changeShowModalAdd}
                                   addCardCB={addCardCB}/>
            <ModalDellCardContainer
                show={showModalDellCard}
                changeShowModalDell={changeShowModalDell}
                delCardCB={delCardCB}
                packName={nameForModal}
            />
            <ModalUpdateCardContainer
                show={showModalUpdateCard}
                answer={newCardAnswer}
                cardName={nameForModal}
                changeShowModalUpdate={changeShowModalUpdate}
                updateCardNameCB={updateCardCB}
                onChangeNameCard={onChangeNameCard}
                onChangeNewAnswer={onChangeNewAnswer}
            />
            <div className={s.cards}>
                <NavLink style={{width: '150px'}} to={'/packs'}> <SuperButton className={s.btnBack} name={'Pack Name'}/>
                </NavLink>

                <div className={s.wrapSearch}>
                    <div className={s.plug}>
                    </div>
                    <SuperButton onClick={() => {
                        changeShowModalAdd()
                    }} name={'Add new card'}/>
                </div>
                {message}
                <div className={s.wrapTable}>
                    <table className={s.tableCards}>
                        <thead>
                        <tr>
                            <td>question</td>
                            <td>answer</td>
                            <td>grade</td>
                            <td>updated</td>
                            <td>actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {table}
                        </tbody>
                    </table>
                </div>

                <Pagination style={{marginTop: '24px'}} className="ant-pagination" defaultCurrent={page}
                            pageSize={pageCount} total={cardsTotalCount!}
                            current={page} locale={localInfo} onChange={onChangePage}/>
            </div>
        </>
    )
}


//types
type PropsType = {
    userId: string
    cardsPack_id: string
    cards: cardsType[],
    cardsTotalCount: null | number
    maxGrade: null | number
    minGrade: null | number
    page: number
    pageCount: number
    packUserId: string
    sortPacks: string
    onChangePage: (currentPage: number) => void
    cardURL: string
    addCardCB: (id: string, question: string, answer: string) => void
    delCardCB: () => void
    updateCardCB: () => void
    message: string
    showModalAddCard: boolean
    showModalDellCard: boolean
    showModalUpdateCard: boolean
    changeShowModalAdd: () => void
    changeShowModalDell: () => void
    changeShowModalUpdate: () => void
    nameForModal: string
    onChangeId: (id: string) => void
    onChangeNameCard: (name: string) => void
    newCardAnswer: string
    onChangeNewAnswer: (answer: string) => void
}

