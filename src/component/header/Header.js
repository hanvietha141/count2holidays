import React from 'react'

const Header = ({switchOptions, header, headerFor}) => {
    return (
        <div>
            {
                switchOptions.map((switchOption, index) => {
                    if (header===switchOption.title) {
                        return <h2 className="headerTitle" key={index} >{switchOption.header} {headerFor}</h2>
                    }
                })
            }
        </div>
    )
}

export default Header
