import React, {useState} from 'react';
import {ModalWindow} from "./ModalWindow";
import {SuperInputText} from "../SuperComponents/c1-SuperInputText/SuperInputText";

interface ModalContainerType {
    show: boolean
    changeShowModalAdd: () => void
    addPackCB: (name: string) => void,
}

export const ModalAddPackContainer: React.FC<ModalContainerType> = ({show, changeShowModalAdd, addPackCB}) => {
    const [newPackName, setNewPackName] = useState('')
    const onChangeNewName = (newPackName: string) => {
        setNewPackName(newPackName)
    }
    const addPackInModal = () => {
        if (newPackName !== '') {
            addPackCB(newPackName)
            changeShowModalAdd()
            setNewPackName('')
        }
    }
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalAdd}

                width={400}
                height={300}
                show={show}
            >
                please add pack
                <SuperInputText autoFocus value={newPackName} onChangeText={onChangeNewName}/>
                <button onClick={changeShowModalAdd}>Close</button>
                <button onClick={addPackInModal}>add</button>
            </ModalWindow>
        </>
    )
};