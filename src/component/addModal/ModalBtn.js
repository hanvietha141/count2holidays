import React from 'react'

const ModalBtn = ({setShowModal, showModal}) => {

    const showModalHandler = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <button onClick={showModalHandler} >Tạo mới</button>
        </div>
    )
}

export default ModalBtn
