import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {HeaderContainer} from "../Header/HeaderContainer";
import s from "./Profile.module.css"

export const Profile: React.FC<PropsType> = (props) => {

    const {
        data,
        status,
    } = props

    return (
        <div className={s.profile}>
            
            <HeaderContainer/>
            <div className={s.inner}>
                {status === 'loading'
                ? <h1 style={{color: 'green'}}>Loading...</h1>
                : <div>
                    Profile
                    <div>{data.avatar}</div>
                    <div>{data.name}</div>
                    <div>{data._id}</div>
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

