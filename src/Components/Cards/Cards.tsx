import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsType} from "../../common/Api/api";
import Pagination from 'rc-pagination';
import {localInfo} from '../../common/locale/en_US';
import '../../common/PaginationStyles/Pagination.css'

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
                                               onChangePage
                                           }) => {
    let table = cards.map(function (item) {
        return <tr key={item._id}>
            <td>{item.question}</td>
            <td>{item.answer}</td>
            <td>{item.grade}</td>
            <td>{item.updated}</td>
        </tr>;
    });
    return (

        <>

            <HeaderContainer/>
            <h1>cards</h1>
            <Pagination className="ant-pagination"
                        defaultCurrent={page}
                        pageSize={pageCount}
                        total={cardsTotalCount}
                        current={page}
                        locale={localInfo}
                        onChange={onChangePage}/>
            <table>
                <thead>
                <tr>
                    <td>question</td>
                    <td>answer</td>
                    <td>grade</td>
                    <td>updated</td>
                </tr>
                </thead>
                <tbody>
                {table}
                </tbody>
            </table>
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
}

