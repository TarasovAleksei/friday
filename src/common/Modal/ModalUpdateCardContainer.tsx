import s from './ModalUpdatePackContainer.module.css'
import React from 'react';
import {ModalWindow} from "./ModalWindow";
import {SuperButton} from '../SuperComponents/c2-SuperButton/SuperButton';
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";
import iconCross from '../../images/btn/icon-cross.svg';

interface ModalContainerType {
    show: boolean
    cardName: string
    answer: string
    changeShowModalUpdate: () => void
    updateCardNameCB: () => void
    onChangeNameCard: (name: string) => void
    onChangeNewAnswer: (answer: string) => void
}

export const ModalUpdateCardContainer: React.FC<ModalContainerType> = ({
                                                                           show,
                                                                           cardName,
                                                                           answer,
                                                                           changeShowModalUpdate,
                                                                           updateCardNameCB,
                                                                           onChangeNameCard,
                                                                           onChangeNewAnswer
                                                                       }) => {

    const onChangeNewName = (cardName: string) => {
        onChangeNameCard(cardName)
    }
    const onChangeNewAnswerName = (answer: string) => {
        onChangeNewAnswer(answer)
    }
    const updatePackInModal = () => {
        updateCardNameCB()
        changeShowModalUpdate()
    }
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalUpdate}

                width={395}
                height={233}
                show={show}
            >
                <div className={s.wrapTitle}>
                    <h3 className={s.titleModal}>Edit card</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalUpdate}><img className={s.modalImg}
                                                                                             src={iconCross} alt="X"/>
                    </button>
                </div>
                <div className={s.modalLine}></div>
                <div className={s.modalInputWrap}>
                    <label style={{width: '100%', marginTop: '0'}} htmlFor="">Question
                        <SuperInputText className={s.modalInput} value={cardName} autoFocus
                                        onChangeText={onChangeNewName}/>
                    </label>
                </div>
                <div className={s.modalInputWrap}>
                    <label style={{width: '100%', marginTop: '0'}} htmlFor="">Answer
                        <SuperInputText className={s.modalInput} value={answer} onChangeText={onChangeNewAnswerName}/>
                    </label>
                </div>
                <div style={{marginTop:'0'}} className={s.modalBtnWrap}>
                    <SuperButton className={s.modalBtnGrey} onClick={changeShowModalUpdate} name='Close'/>
                    <SuperButton onClick={updatePackInModal} name='Edit'/>
                </div>
            </ModalWindow>
        </>
    )
};