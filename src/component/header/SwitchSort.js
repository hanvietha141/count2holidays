import React from 'react'

const SwitchSort = ({sort, switchOptionItems, setDateTime, setHeaderFor, setChangeBg}) => {

    const getDateTime = (el) => {
        switchOptionItems.map((switchOptionItem, index) => {
            if (el.target.value===switchOptionItem.name){
                setDateTime(switchOptionItem.date)
                setHeaderFor(switchOptionItem.happyFor)
                setChangeBg(switchOptionItem.img)
            }
        })
    }

    return (
        <div>
            <select onChange={getDateTime} >
                {
                    switchOptionItems.map((switchOptionItem, index) => {
                        if (switchOptionItem.sort===sort) {
                            return (
                                <option key={index} >{switchOptionItem.name}</option>
                            )
                        }
                    })
                }
            </select>
        </div>
    )
}

export default SwitchSort
