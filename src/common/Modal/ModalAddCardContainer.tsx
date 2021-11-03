import s from './ModalAddPackContainer.module.css'
import React, {useState} from 'react';
import {ModalWindow} from "./ModalWindow";
import {SuperButton} from '../SuperComponents/c2-SuperButton/SuperButton';
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";
import iconCross from '../../images/btn/icon-cross.svg';

interface ModalContainerType {
    show: boolean
    cardsPack_id: string
    changeShowModalAdd: () => void
    addCardCB: (id: string, question:string, answer: string) => void,
}

export const ModalAddCardContainer: React.FC<ModalContainerType> = ({show,cardsPack_id, changeShowModalAdd, addCardCB}) => {
    const [newCardQuestion, setNewCardQuestion] = useState('')
    const [newCardAnswer, setNewCardAnswer] = useState('')
    const onChangeNewQuestion = (question: string) => {
        setNewCardQuestion(question)
    }
    const onChangeNewAnswer = (answer: string) => {
        setNewCardAnswer(answer)
    }
    const addCardInModal = () => {
        if (newCardQuestion !== '' && newCardAnswer !== '') {
            addCardCB(cardsPack_id, newCardQuestion, newCardAnswer)
            changeShowModalAdd()
            onChangeNewQuestion('')
            onChangeNewAnswer('')
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
                <div className={s.wrapTitle}>
                    <h3 className={s.titleModal}>Add new card</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalAdd}><img className={s.modalImg}
                                                                                          src={iconCross} alt="X"/>
                    </button>
                </div>
                <div className={s.modalLine}></div>
                <div className={s.modalInputWrap}>
                    <SuperInputText className={s.modalInput} placeholder={'Question'} autoFocus value={newCardQuestion}
                                    onChangeText={onChangeNewQuestion}/>
                </div>
                <div className={s.modalInputWrap}>
                    <SuperInputText className={s.modalInput} placeholder={'Answer'} value={newCardAnswer}
                                    onChangeText={onChangeNewAnswer}/>
                </div>

                <div className={s.modalBtnWrap}>
                    <SuperButton className={s.modalBtnGrey} onClick={changeShowModalAdd} name='Close'/>
                    <SuperButton onClick={addCardInModal} name='Save'/>
                </div>
            </ModalWindow>
        </>
    )
};