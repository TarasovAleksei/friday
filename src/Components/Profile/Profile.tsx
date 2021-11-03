import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {HeaderContainer} from "../Header/HeaderContainer";
import s from "./Profile.module.css"
import {Preloader} from '../Preloader/Preloader';
import {SuperButton} from '../../common/SuperComponents/c2-SuperButton/SuperButton';
import userDefaultPhoto from '../../images/profile/no_foto.jpeg'
import {SuperEditableSpan} from "../../common/SuperComponents/c4-SuperEditableSpan/SuperEditableSpan";
import {ModalUpdateProfileContainer} from "../../common/Modal/ModalUpdateProfileContainer";

export const Profile: React.FC<PropsType> = ({
                                                 name,
                                                 avatar,
                                                 onChangeName,
                                                 onChangeAvatar,
                                                 updateProfile,
                                                 status,
                                                 showModalUpdateProfile,
                                                 changeShowModalUpdate,
                                             }) => {


    return (
        <div className={s.profile}>
            <HeaderContainer/>
            <ModalUpdateProfileContainer
                show={showModalUpdateProfile}
                name={name}
                avatar={avatar}
                changeShowModalUpdate={changeShowModalUpdate}
                onChangeNameProfile={onChangeName}
                onChangeAvatarProfile={onChangeAvatar}
                updateProfile={updateProfile}

            />
            <div className={s.holder}>
                {status === 'loading'
                    ? <div className={s.preloaderProfile}><Preloader/></div>
                    : <div className={s.inner}>
                        <h1 className={s.title}>Personal Information</h1>
                        <img className={s.avatar} src={avatar != null ? avatar : userDefaultPhoto}
                             alt="ava"/>
                        <div className={s.nameHuman}>{name}</div>
                        <SuperButton onClick={changeShowModalUpdate} className={s.btnEditProfile} name={'Edit profile'}/>
                    </div>
                }
            </div>

        </div>
    )
}

//types
type PropsType = {
    name: string
    avatar: string
    onChangeName: (newName: string) => void
    onChangeAvatar: (newName: string) => void
    updateProfile: () => void
    status: RequestStatusType
    showModalUpdateProfile: boolean
    changeShowModalUpdate: () => void
}

