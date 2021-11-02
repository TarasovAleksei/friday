import React from 'react';
import {ModalWindow} from "./ModalWindow";
import s from './ModalDellPackContainer.module.css';
import iconCross from '../../images/btn/icon-cross.svg';
import {SuperButton} from "../../common/SuperComponents/c2-SuperButton/SuperButton";
interface ModalContainerType {
    show: boolean
    packName: string
    changeShowModalDell: () => void
    delPackCB: () => void
}

export const ModalDellPackContainer: React.FC<ModalContainerType> = ({
                                                                         show,
                                                                         packName,
                                                                         changeShowModalDell,
                                                                         delPackCB,
                                                                     }) => {

    const dellPackInModal = () => {
        delPackCB()
        changeShowModalDell()
    }
    console.log(packName)
    return (
        <div className={s.modalHold}>

            <ModalWindow 
                enableBackground={true}
                backgroundOnClick={changeShowModalDell}

                width={392}
                height={221}
                show={show}
            >   <div className ={s.wrapTitle}>
                <h3 className={s.titleModal}>Delete pack</h3>
                <button className={s.modalBtnCross} onClick={changeShowModalDell}><img className={s.modalImg} src={iconCross} alt="X" /></button>
            </div>
            <div className={s.modalLine}></div>
                <p className={s.modalText}>
                Do you really want remove  <span className={s.modalTextActive}>PACK NAME - {packName}</span> ?
                All cards will be excluded from this course.
                </p>
                <div className={s.modalBtnWrap}>
                    <SuperButton onClick={changeShowModalDell} name='Cancel' />
                    <SuperButton className={s.modalBtnRed} onClick={dellPackInModal} name='Delete' />
                </div>
                
            </ModalWindow>
        </div>
    )
};