import React from 'react'

//--- Components
import Left from './Left/Left'
import Player from './Player/Player'
import Right from './Right/Right'


function Footer() {
    return (
        <div class="container-fluid bg-success fixed-bottom m-0 p-0">
            Footer
            <div className="row">
                <Left />
                <Player />
                <Right />
            </div>
        </div>
    )
}

export default Footer
