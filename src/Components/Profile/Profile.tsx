import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";
import {HeaderContainer} from "../Header/HeaderContainer";

export const Profile: React.FC<PropsType> = (props) => {

    const {
        data,
        status,
    } = props

    return (
        <>
            <HeaderContainer/>
            {status === 'loading'
                ? <h1 style={{color: 'green'}}>Loading...</h1>
                : <div>
                    Profile
                    <div>{data.avatar}</div>
                    <div>{data.name}</div>
                    <div>{data._id}</div>
                </div>
            }
        </>
    )
}

//types
type PropsType = {
    data: UserData
    status: RequestStatusType
}

