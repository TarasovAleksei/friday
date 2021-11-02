import React from 'react';
import {HeaderContainer} from "../Header/HeaderContainer";
import {cardsPacksType, UserData} from "../../common/Api/api";
import {NavLink} from 'react-router-dom';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
import Pagination from "rc-pagination";
import {localInfo} from '../../common/locale/en_US';
import s from './Packs.module.css'
import userDefaultPhoto from "../../images/profile/no_foto.jpeg";
import {SuperCheckbox} from "../../common/SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {ModalAddPackContainer} from "../../common/Modal/ModalAddPackContainer";
import {ModalDellPackContainer} from "../../common/Modal/ModalDellPackContainer";
import {ModalUpdatePackContainer} from "../../common/Modal/ModalUpdatePackContainer";


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
                                               onChangePage,
                                               onSortClick,
                                               sortPointer,
                                               callSetSearchPack,
                                               getSearchPacks,
                                               data,
                                               showPrivatePacks,
                                               changePrivatePacks,
                                               showModalAddPack,
                                               changeShowModalAdd,
                                               showModalDellPack,
                                               changeShowModalDell,
                                               idForDellModal,
                                               nameForDellModal,
                                               onChangeId,onChangeNamePack,showModalUpdatePack,
                                               changeShowModalUpdate
                                           }) => {

    let table = cardPacks.map(function (item) {
        return <tr key={item._id}>


            <td><NavLink to={`/cards/` + item._id}>{item.name}</NavLink></td>

            <td>{item.cardsCount}</td>
            <td>{item.updated.substr(0, 10)}</td>
            <td>{item.rating}</td>
            <td>
                <SuperButton className={s.btnDel} onClick={() => {
                    changeShowModalDell()
                    onChangeId(item._id)
                    onChangeNamePack(item.name)
                }} name={'Delete'}/>
                <SuperButton className={s.btnEdit} onClick={() => {
                    changeShowModalUpdate()
                    onChangeId(item._id)
                    onChangeNamePack(item.name)
                }} name={'Edit'}/>
                <NavLink to={`/cards/` + item._id}>
                    <SuperButton className={s.btnLearn} name={'Learn'}/>
                </NavLink>
            </td>
        </tr>
    })

    return (
        <>
            <HeaderContainer/>
            <ModalAddPackContainer
                show={showModalAddPack}
                changeShowModalAdd={changeShowModalAdd}
                addPackCB={addPackCB}
            />
            <ModalDellPackContainer
                show={showModalDellPack}
                packName={nameForDellModal}
                changeShowModalDell={changeShowModalDell}
                delPackCB={delPackCB}
            />
            <ModalUpdatePackContainer
                show={showModalUpdatePack}
                packName={nameForDellModal}
                changeShowModalUpdate={changeShowModalUpdate}
                updatePackNameCB={updatePackNameCB}
                onChangeNamePack={onChangeNamePack}
            />
            <div className={s.packs}>
                <div className={s.leftBlock}>
                    <div className={s.containerForProfileInPacks}>
                        <img className={s.avatar} src={data.avatar != null ? data.avatar : userDefaultPhoto}
                             alt="ava"/>
                        <div>{data.name}</div>
                    </div>
                    <SuperCheckbox style={{margin: "0"}}
                                   checked={showPrivatePacks}
                                   onChangeChecked={changePrivatePacks}/>
                    <span>My packs</span>
                </div>
                <div className={s.rightBloc}>
                    <h1 className={s.title}>Packs list</h1> {errorMessage}
                    <div className={s.wrapSearch}>
                        <div className={s.search}>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) =>
                                    callSetSearchPack(e.currentTarget.value)
                                }
                            />
                            <SuperButton className={s.btnSearch} onClick={getSearchPacks} name={'.'}/>
                        </div>
                        <SuperButton onClick={changeShowModalAdd} name={'Add new pack'}/>
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
    delPackCB: () => void,
    updatePackNameCB: (newName:string) => void,
    onSortClick: () => void
    sortPointer: null | string
    callSetSearchPack: (value: string) => void
    getSearchPacks: () => void
    data: UserData
    showPrivatePacks: boolean
    changePrivatePacks: () => void
    showModalAddPack: boolean
    changeShowModalAdd: () => void
    showModalDellPack: boolean
    changeShowModalDell: () => void
    idForDellModal: string
    nameForDellModal: string
    onChangeId: (id: string) => void
    onChangeNamePack: (name: string) => void
    showModalUpdatePack:boolean
    changeShowModalUpdate:()=>void
}
