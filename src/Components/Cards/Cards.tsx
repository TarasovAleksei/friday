import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsType} from "../../common/Api/api";


export const Cards: React.FC<PropsType> = ({cards,cardsPack_id,page,pageCount,cardsTotalCount,sortPacks,packUserId,maxGrade,minGrade}) => {
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
}

