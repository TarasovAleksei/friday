
import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsPacksType} from "../../common/Api/api";
import {NavLink} from 'react-router-dom';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import Pagination from "rc-pagination";
import {localInfo} from '../../common/locale/en_US';
import s from './Packs.module.css'
import {Search} from "../../common/Search/Search";


export const Packs: React.FC<PropsType> = ({
                                               cardPacks,
                                               cardPacksTotalCount,
                                               maxCardsCount,
                                               minCardsCount,
                                               pageCount,
                                               page,
                                               addPackCB,
                                               delPackCB,
                                               updatePackNameCB,
                                               errorMessage,
                                               filterPacks,
                                               onChangePage,
                                               onSortClick,
                                               sortPointer,
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
                <SuperButton className={s.btnDel} onClick={() => {
                    delPackCB(item._id)
                }} name={'Delete'}/>
                <SuperButton className={s.btnEdit} onClick={() => {
                    updatePackNameCB(item._id, 'newSuperName')
                }} name={'Edit'}/>
                <NavLink to={`/cards/` + item._id}>
                    <SuperButton className={s.btnLearn} name={'Learn'}/>
                </NavLink>
            </>}
            </td>
        </tr>;
    });

    return (
        <>
            <HeaderContainer/>
            <div className={s.packs}>
                <div className={s.leftBlock}></div>
                <div className={s.rihtBloc}>
                    <h1 className={s.title}>Packs list</h1> {errorMessage}
                    <div className={s.wrapSearch}>

                        <div className={s.plug}>
                            {/*<Search filterPacks={filterPacks}/>*/}
                        </div>
                        <SuperButton onClick={() => {
                            addPackCB('newName')
                        }} name={'Add new pack'}/>
                    </div>
                    <div className={s.wrapTable}>
                        <table>
                            <thead>
                            <tr>

                                <td>Name</td>
                                <td>Cards</td>
                                <td onClick={onSortClick}>Last updated {sortPointer}</td>
                                <td>Created by</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            {table}
                            </tbody>
                        </table>
                    </div>

                    <Pagination style={{marginTop: '24px', alignSelf: 'flex-start'}}
                                className="ant-pagination"
                                showQuickJumper
                                defaultCurrent={page}
                                pageSize={pageCount}
                                total={cardPacksTotalCount!}
                                current={page}
                                locale={localInfo}
                                onChange={onChangePage}/>
                </div>
            </div>
        </>
    )
}


//types
type PropsType = {
    cardPacks: cardsPacksType[],
    cardPacksTotalCount: number | null,
    maxCardsCount: null | number,
    minCardsCount: null | number,
    page: number,
    pageCount: number,
    onChangePage: (currentPage: number) => void
    errorMessage: string
    addPackCB: (name: string) => void,
    delPackCB: (id: string) => void,
    updatePackNameCB: (id: string, name: string) => void,
    filterPacks:(filterValue: string)=>void
    onSortClick: () => void
    sortPointer: null | string
}
