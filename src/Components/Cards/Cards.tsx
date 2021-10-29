import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsType} from "../../common/Api/api";
import Pagination from 'rc-pagination';
import {localInfo} from '../../common/locale/en_US';
import '../../common/PaginationStyles/Pagination.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';
import s from './Cards.module.css';


export const Cards: React.FC<PropsType> = ({
                                               cards,
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
                                               message,
                                           }) => {

    let table = cards.map(function (item) {
        return <tr key={item._id}>
            <td>{item.question}</td>
            <td>{item.answer}</td>
            <td>{item.grade}</td>
            <td>{item.updated.substr(0, 10)}</td>
            <td> {<>
                <SuperButton className={s.btnDel} onClick={() => {
                    delCardCB(cardURL, item._id)
                }} name={'del'}/>
                <SuperButton className={s.btnEdit} onClick={() => {
                    updateCardCB(cardURL, item._id, 'newCustomQuestion')
                }} name={'Edit'}/>
            </>}
            </td>
        </tr>
    });
    return (

        <>
            <HeaderContainer/>
            <div className={s.cards}>
                <NavLink style={{width: '150px'}} to={'/packs'}> <SuperButton className={s.btnBack} name={'Pack Name'}/>
                </NavLink>

                <div className={s.wrapSearch}>
                    <div className={s.plug}>
                        {/*
                    <Search filterPacks={filterPacks} />*/}
                    </div>
                    <SuperButton onClick={() => {
                        addCardCB(cardURL)
                    }} name={'Add new card'}/>
                </div>


                {/* <h1 className={s.title}>cards</h1> */} {message}
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
    addCardCB: (id: string) => void
    delCardCB: (idPuck: string, idCard: string) => void
    updateCardCB: (idPuck: string, idCard: string, name: string) => void
    message: string
}

