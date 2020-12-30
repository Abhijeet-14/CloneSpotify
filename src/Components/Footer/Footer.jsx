import React from 'react'

//--- Components
import Left from './Left/Left'
import Player from './Player/Player'
import Right from './Right/Right'


function Footer() {
    return (
        <div
            className="container-fluid fixed-botto bg-secondary m-0 p-0 "
        >
            Footer
            <div className="row flex-row m-0 p-0">
                <Left />
                <Player />
                <Right />
            </div>
        </div>
    )
}

export default Footer
