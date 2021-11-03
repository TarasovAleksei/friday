import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../Store/redux-store";
import {UserData} from "../../common/Api/api";
import {RequestStatusType, updateProfileTC} from "../../Store/appReducer";
import {Profile} from "./Profile";

export const ProfileContainer = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const data = useSelector<AppRootStateType, UserData>(state => state.app.data)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()
    const [showModalUpdateProfile, setShowModalUpdateProfile] = useState(false);
    const [newName, setNewName]=useState<string>(data.name)
    const [newAvatar, setNewAvatar]=useState<string>(data.avatar)
    const updateProfile = () => {
        dispatch(updateProfileTC(newName,newAvatar))
    }
    const onChangeName = (newName:string)=>{
        setNewName(newName)
    }
    const onChangeAvatar = (newAvatar:string)=>{
        setNewAvatar(newAvatar)
    }
    const changeShowModalUpdate = () => {
        setShowModalUpdateProfile(!showModalUpdateProfile)
    }
    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <Profile name={newName}
                 avatar={newAvatar}
                 onChangeName={onChangeName}
                 onChangeAvatar={onChangeAvatar}
                 updateProfile={updateProfile}
                 showModalUpdateProfile={showModalUpdateProfile}
                 changeShowModalUpdate={changeShowModalUpdate}
                 status={status}
        />
    );
};
