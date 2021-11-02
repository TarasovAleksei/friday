import React from 'react';
import {ModalWindow} from "./ModalWindow";

interface ModalContainerType {
    show: boolean
    packName: string
    changeShowModalDell: () => void
    delPackCB: () => void
}

export const ModalDellPackContainer: React.FC<ModalContainerType> = ({
                                                                         show,
                                                                         packName,
                                                                         changeShowModalDell,
                                                                         delPackCB,
                                                                     }) => {

    const dellPackInModal = () => {
        delPackCB()
        changeShowModalDell()
    }
    console.log(packName)
    return (
        <>

            <ModalWindow
                enableBackground={true}
                backgroundOnClick={changeShowModalDell}

                width={400}
                height={300}
                show={show}
            >
                <span> Delete pack</span>
                <span> Do you really want remove PACK NAME - {packName}?</span>
                <span> All cards will be excluded from this course</span>
                <button onClick={changeShowModalDell}>no</button>
                <button onClick={dellPackInModal}>yes</button>
            </ModalWindow>
        </>
    )
};