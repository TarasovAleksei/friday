import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsPacksType} from "../../common/Api/api";
import {NavLink} from 'react-router-dom';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import Pagination from "rc-pagination";
import {localInfo} from '../../common/locale/en_US';


export const Packs: React.FC<PropsType> = ({
                                               cardPacks,
                                               cardPacksTotalCount,
                                               maxCardsCount,
                                               minCardsCount,
                                               pageCount,
                                               page,
                                               onChangePage,
                                           }) => {
    let table = cardPacks.map(function (item) {
        return <tr key={item._id}>
            <NavLink to={`/cards/` + item._id}>
                <td>{item.name}</td>
            </NavLink>
            <td>{item.cardsCount}</td>
            <td>{item.updated}</td>
            <td>{item.rating}</td>
            <td>    {<>
                <SuperButton name={'add'}/>
                <SuperButton name={'update'}/>
            </>}
            </td>
        </tr>;
    });


    return (
        <>
            <HeaderContainer/>
            <h1>packs</h1>
            <Pagination className="ant-pagination"
                        showQuickJumper
                        defaultCurrent={page}
                        pageSize={pageCount}
                        total={cardPacksTotalCount}
                        current={page}
                        locale={localInfo}
                        onChange={onChangePage}/>
            <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>Cards</td>
                    <td>Last updated</td>
                    <td>Actions</td>
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
    cardPacks: cardsPacksType[],
    cardPacksTotalCount: number | null,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page:  number,
    pageCount: number,
    onChangePage: (currentPage: number) => void
}

