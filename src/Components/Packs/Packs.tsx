import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsPacksType} from "../../common/Api/api";
import {NavLink} from 'react-router-dom';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";


export const Packs: React.FC<PropsType> = ({
                                               cardPacks,
                                               cardPacksTotalCount,
                                               maxCardsCount,
                                               minCardsCount,
                                               pageCount,
                                               page,
                                               addPackCB, delPackCB, updatePackNameCB, errorMessage,
                                           }) => {
    let table = cardPacks.map(function (item) {
        return <tr key={item._id}>
            <NavLink to={`/cards/` + item._id}>
                <td>{item.name}</td>
            </NavLink>

            <td>{item.cardsCount}</td>
            <td>{item.updated.substr(0, 10)}</td>
            <td>{item.rating}</td>
            <td>    {<>
                <SuperButton onClick={() => {
                    delPackCB(item._id)
                }} name={'del'}/>
                <SuperButton onClick={() => {
                    updatePackNameCB(item._id, 'newSuperName')
                }} name={'update'}/>
            </>}
            </td>
        </tr>;
    });


    return (
        <>
            <HeaderContainer/>
            <h1>packs</h1> {errorMessage}
            <SuperButton onClick={() => {
                addPackCB('newName')
            }} name={'add'}/>
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
    cardPacksTotalCount: null | number,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    errorMessage: string
    page: null | number,
    pageCount: null | number,
    addPackCB: (name: string) => void,
    delPackCB: (id: string) => void,
    updatePackNameCB: (id: string, name: string) => void,
}

