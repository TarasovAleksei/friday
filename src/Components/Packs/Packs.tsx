import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsPacksType} from "../../common/Api/api";
import { NavLink } from 'react-router-dom';


export const Packs: React.FC<PropsType> = ({
                                               cardPacks,
                                               cardPacksTotalCount,
                                               maxCardsCount,
                                               minCardsCount,
                                               pageCount,
                                               page,
                                           }) => {
    let table = cardPacks.map(function (item) {
        return <tr key={item._id}>
            <NavLink to={`/cards/`+item._id}>
                <td>{item.name}</td>
            </NavLink>

            <td>{item.cardsCount}</td>
            <td>{item.updated}</td>
            <td>{item.rating}</td>
        </tr>;
    });


    return (
        <>
            <HeaderContainer/>
            <h1>packs</h1>
            <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>cardsCount</td>
                    <td>updated</td>
                    <td>URL</td>
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
    cardPacksTotalCount: null | number,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page: null | number,
    pageCount: null | number,
}

