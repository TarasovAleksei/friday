import s from './ModalUpdatePackContainer.module.css'
import React from 'react';
import {ModalWindow} from "./ModalWindow";
import {SuperButton} from '../SuperComponents/c2-SuperButton/SuperButton';
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";
import iconCross from '../../images/btn/icon-cross.svg';

interface ModalContainerType {
    show: boolean
    name: string
    avatar: string
    changeShowModalUpdate: () => void
    updateProfile: () => void
    onChangeNameProfile: (name: string) => void
    onChangeAvatarProfile: (avatar: string) => void
}

export const ModalUpdateProfileContainer: React.FC<ModalContainerType> = ({
                                                                              show,
                                                                              name,
                                                                              avatar,
                                                                              changeShowModalUpdate,
                                                                              updateProfile,
                                                                              onChangeNameProfile,
                                                                              onChangeAvatarProfile
                                                                          }) => {

    const onChangeNewName = (name: string) => {
        onChangeNameProfile(name)
    }
    const onChangeNewAvatar = (avatar: string) => {
        onChangeAvatarProfile(avatar)
    }
    const updateProfileInModal = () => {
        updateProfile()
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
                    <h3 className={s.titleModal}>Edit profile</h3>
                    <button className={s.modalBtnCross} onClick={changeShowModalUpdate}><img className={s.modalImg}
                                                                                             src={iconCross} alt="X"/>
                    </button>
                </div>
                <div className={s.modalLine}></div>
                <div className={s.modalInputWrap}>
                    <label style={{width:'100%', marginTop:'0'}} htmlFor="">Name
                        <SuperInputText className={s.modalInput} value={name} autoFocus onChangeText={onChangeNewName}/>
                    </label>
                </div>
                <div className={s.modalInputWrap}>
                    <label style={{width:'100%', marginTop:'0'}} htmlFor="">Avatar url:
                        <SuperInputText className={s.modalInput} value={avatar} onChangeText={onChangeNewAvatar}/>
                    </label>
                </div>
                <div style={{marginTop:'0'}} className={s.modalBtnWrap}>
                    <SuperButton className={s.modalBtnGrey} onClick={changeShowModalUpdate} name='Close'/>
                    <SuperButton onClick={updateProfileInModal} name='Edit'/>
                </div>
            </ModalWindow>
        </>
    )
};