import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {HeaderContainer} from "../Header/HeaderContainer";
import s from "./Profile.module.css"
import { Preloader } from '../Preloader/Preloader';
import { SuperButton } from '../../common/SuperComponents/c2-SuperButton/SuperButton';

export const Profile: React.FC<PropsType> = (props) => {

    const {
        data,
        status,
    } = props

    return (
        <div className={s.profile}>
            
            <HeaderContainer />
            <div className={s.holder}>
                {status === 'loading'
                ? <div className={s.preloaderProfile}><Preloader/></div>
                : <div className={s.inner}>
                    <h1 className={s.title}>Personal Information</h1>
                    <div>{data.avatar}</div>
                    <div>{data.name}</div>
                    <div>{data._id}</div>
                    <div className={s.wrapBtn}>
                    <SuperButton 
                                 style={{maxWidth: '127px', width: '100%', }}
                                 name={'Cancel'} />
                    <SuperButton 
                                 style={{maxWidth: '127px', width: '100%',}}
                                 name={'Save'} />
                    </div>
                    
                </div>
            }
            </div>
            
        </div>
    )
}

//types
type PropsType = {
    data: UserData
    status: RequestStatusType
}

