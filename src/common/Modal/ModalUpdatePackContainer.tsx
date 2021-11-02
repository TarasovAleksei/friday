import React, {useState} from 'react';
import {ModalWindow} from "./ModalWindow";
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";

interface ModalContainerType {
    show: boolean
    packName: string
    changeShowModalUpdate: () => void
    updatePackNameCB: (newName:string) => void
    onChangeNamePack:(name:string)=>void
}

export const ModalUpdatePackContainer: React.FC<ModalContainerType> = ({
                                                                         show,
                                                                         packName,
                                                                           changeShowModalUpdate,
                                                                           updatePackNameCB,onChangeNamePack
                                                                     }) => {
    // const [newPackName, setNewPackName] = useState(packName)
    const onChangeNewName = (packName: string) => {
        onChangeNamePack(packName)
    }
    const updatePackInModal = () => {
        updatePackNameCB(packName)
        changeShowModalUpdate()
    }
    console.log(packName)
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalUpdate}

                width={400}
                height={300}
                show={show}
            >
                <span> Update pack</span>
                <SuperInputText autoFocus value={packName} onChangeText={onChangeNewName}/>
                <button onClick={changeShowModalUpdate}>no</button>
                <button onClick={updatePackInModal}>edit</button>
            </ModalWindow>
        </>
    )
};