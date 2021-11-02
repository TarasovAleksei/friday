import s from './ModalAddPackContainer.module.css'
import React, {useState} from 'react';
import {ModalWindow} from "./ModalWindow";
import { SuperButton } from '../SuperComponents/c2-SuperButton/SuperButton';
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";
import iconCross from '../../images/btn/icon-cross.svg';

interface ModalContainerType {
    show: boolean
    changeShowModalAdd: () => void
    addPackCB: (name: string) => void,
}

export const ModalAddPackContainer: React.FC<ModalContainerType> = ({show, changeShowModalAdd, addPackCB}) => {
    const [newPackName, setNewPackName] = useState('')
    const onChangeNewName = (newPackName: string) => {
        setNewPackName(newPackName)
    }
    const addPackInModal = () => {
        if (newPackName !== '') {
            addPackCB(newPackName)
            changeShowModalAdd()
            setNewPackName('')
        }
    }
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalAdd}

                width={395}
                height={233}
                show={show}
            >
                <div className ={s.wrapTitle}>
                    <h3 className={s.titleModal}>Add new pack</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalAdd}><img className={s.modalImg} src={iconCross} alt="X" /></button>
                </div>
                <div className={s.modalLine}></div>
                <div className={s.modalInputWrap}>
                    <SuperInputText className={s.modalInput} placeholder={'Name Pack'} autoFocus value={newPackName} onChangeText={onChangeNewName}/>
                </div>
                
                <div className={s.modalBtnWrap}>
                    <SuperButton className={s.modalBtnGrey} onClick={changeShowModalAdd} name='Close' />
                    <SuperButton onClick={addPackInModal} name='Save' />
                </div>
            </ModalWindow>
        </>
    )
};