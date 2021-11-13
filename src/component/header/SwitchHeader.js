import React from 'react'

const SwitchHeader = ({switchOptions, setHeader, setSort, setHeaderFor, switchOptionItems, setDateTime, setChangeBg}) => {

    const handleSwtichHeader = (e) => {
        setHeader(e.target.value);
        switchOptions.map((switchOption, index) => {
            if (e.target.value===switchOption.title) {
                setSort(switchOption.sort)
                let newSwitchOtionItems = switchOptionItems.filter( (el) => {
                    return el.sort==switchOption.sort
                })
                setHeaderFor(newSwitchOtionItems[0].happyFor)
                setDateTime(newSwitchOtionItems[0].date)
                setChangeBg(newSwitchOtionItems[0].img)
            }
        })
    }


    return (
        <div>
            <select onChange={handleSwtichHeader} >
                {switchOptions.map((switchOption, index) => {
                    return <option key={index} >{switchOption.title}</option>
                })}
            </select>
        </div>
    )
}

export default SwitchHeader
