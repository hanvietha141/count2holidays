import React from 'react'
import { Fragment } from 'react'

const SelectionModal = ({switchOption, setAddState, setAddStateSort}) => {

    const getSetAddState = (e) => {
        setAddState(e.target.value)
        setAddStateSort(switchOption.sort)
    }

    return (
        <Fragment>
            <button onClick={getSetAddState} value={switchOption.title} >{switchOption.title}</button>
        </Fragment>
    )
}

export default SelectionModal
