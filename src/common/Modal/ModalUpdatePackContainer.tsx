import s from './ModalUpdatePackContainer.module.css'
import React, {useState} from 'react';
import {ModalWindow} from "./ModalWindow";
import { SuperButton } from '../SuperComponents/c2-SuperButton/SuperButton';
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";
import iconCross from '../../images/btn/icon-cross.svg';

interface ModalContainerType {
    show: boolean
    packName: string
    changeShowModalUpdate: () => void
    updatePackNameCB: (newName:string) => void
    onChangeNamePack:(name:string)=>void
}

export const ModalUpdatePackContainer: React.FC<ModalContainerType> = ({
                                                                         show,
                                                                         packName,
                                                                           changeShowModalUpdate,
                                                                           updatePackNameCB,onChangeNamePack
                                                                     }) => {
    // const [newPackName, setNewPackName] = useState(packName)
    const onChangeNewName = (packName: string) => {
        onChangeNamePack(packName)
    }
    const updatePackInModal = () => {
        updatePackNameCB(packName)
        changeShowModalUpdate()
    }
    console.log(packName)
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalUpdate}

                width={395}
                height={233}
                show={show}
            >
                <div className ={s.wrapTitle}>
                    <h3 className={s.titleModal}>Edit pack</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalUpdate}><img className={s.modalImg} src={iconCross} alt="X" /></button>
                </div>
                <div className={s.modalLine}></div>
                <div className={s.modalInputWrap}>
                    <SuperInputText className={s.modalInput} placeholder={'Edit Pack'} autoFocus value={packName} onChangeText={onChangeNewName}/>
                </div>
                <div className={s.modalBtnWrap}>
                    <SuperButton className={s.modalBtnGrey} onClick={changeShowModalUpdate} name='Close' />
                    <SuperButton onClick={updatePackInModal} name='Edit' />
                </div>
            </ModalWindow>
        </>
    )
};