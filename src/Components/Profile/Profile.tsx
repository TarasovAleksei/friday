import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {HeaderContainer} from "../Header/HeaderContainer";
import s from "./Profile.module.css"
import {Preloader} from '../Preloader/Preloader';
import {SuperButton} from '../../common/SuperComponents/c2-SuperButton/SuperButton';
import userDefaultPhoto from '../../images/profile/no_foto.jpeg'
import {SuperEditableSpan} from "../../common/SuperComponents/c4-SuperEditableSpan/SuperEditableSpan";

export const Profile: React.FC<PropsType> = (props) => {

    const {
        name, avatar,
        status, changeName,
        onChangeName,
    } = props

    return (
        <div className={s.profile}>
            <HeaderContainer/>
            <div className={s.holder}>
                {status === 'loading'
                    ? <div className={s.preloaderProfile}><Preloader/></div>
                    : <div className={s.inner}>
                        <h1 className={s.title}>Personal Information</h1>
                        <img className={s.avatar} src={avatar != null ? avatar : userDefaultPhoto}
                             alt="ava"/>
                        <SuperEditableSpan onChangeText={onChangeName} onEnter={changeName} onBlur={changeName}
                                           value={name}/>
                        {/*<div className={s.wrapBtn}>*/}
                        {/*    <SuperButton*/}
                        {/*        style={{maxWidth: '127px', width: '100%',}}*/}
                        {/*        name={'Cancel'}/>*/}
                        {/*    <SuperButton*/}
                        {/*        style={{maxWidth: '127px', width: '100%',}}*/}
                        {/*        name={'Save'}/>*/}
                        {/*</div>*/}

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
    changeName: () => void
    status: RequestStatusType
}

