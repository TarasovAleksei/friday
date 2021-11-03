import React from 'react';
import {ModalWindow} from "./ModalWindow";
import s from './ModalDellPackContainer.module.css';
import iconCross from '../../images/btn/icon-cross.svg';
import {SuperButton} from "../SuperComponents/c2-SuperButton/SuperButton";

interface ModalContainerType {
    show: boolean
    packName: string
    changeShowModalDell: () => void
    delCardCB: () => void
}

export const ModalDellCardContainer: React.FC<ModalContainerType> = ({
                                                                         show,
                                                                         packName,
                                                                         changeShowModalDell,
                                                                         delCardCB,
                                                                     }) => {

    const dellPackInModal = () => {
        delCardCB()
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
            >
                <div className={s.wrapTitle}>
                    <h3 className={s.titleModal}>Delete card</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalDell}><img className={s.modalImg}
                                                                                           src={iconCross} alt="X"/>
                    </button>
                </div>
                <div className={s.modalLine}></div>
                <p className={s.modalText}>
                    Do you really want remove <span className={s.modalTextActive}>CARD NAME - {packName}</span> ?
                </p>
                <div className={s.modalBtnWrap}>
                    <SuperButton onClick={changeShowModalDell} name='Cancel'/>
                    <SuperButton className={s.modalBtnRed} onClick={dellPackInModal} name='Delete'/>
                </div>
            </ModalWindow>
        </div>
    )
};