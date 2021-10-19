import React from 'react';
import {UserData} from "../../common/Api/api";
import {RequestStatusType} from "../../Store/appReducer";

export const Profile: React.FC<PropsType> = (props) => {

    const {
        data,
        status,
    } = props

    return (
        <>
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

