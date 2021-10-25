import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsType} from "../../common/Api/api";
import Pagination from 'rc-pagination';
import {localInfo} from '../../common/locale/en_US';
import '../../common/PaginationStyles/Pagination.css'
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import {NavLink} from 'react-router-dom';


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
                                               onChangePage
                                           }) => {

    let table = cards.map(function (item) {
        return <tr key={item._id}>
            <td>{item.question}</td>
            <td>{item.answer}</td>
            <td>{item.grade}</td>
            <td>{item.updated.substr(0, 10)}</td>
            <td>    {<>
                <SuperButton onClick={() => {
                    delCardCB(cardURL, item._id)
                }} name={'del'}/>
                <SuperButton onClick={()=>{updateCardCB(cardURL, item._id, 'newCustomQuestion')}} name={'update'}/>
            </>}
            </td>
        </tr>;
    });
    return (

        <>

            <HeaderContainer/>
            <NavLink to={'/packs'}>
                <SuperButton name={'back'}/>
            </NavLink>
            <SuperButton onClick={() => {
                addCardCB(cardURL)
            }} name={'add'}/>
            <h1>cards</h1>
            <Pagination className="ant-pagination"
                        defaultCurrent={page}
                        pageSize={pageCount}
                        total={cardsTotalCount!}
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
                    <td>actions</td>
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
    cardURL: string
    addCardCB: (id: string) => void
    delCardCB: (idPuck: string, idCard: string) => void
    updateCardCB:(idPuck: string, idCard: string, name: string)=>void
}

