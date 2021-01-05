import React, { useContext, useEffect, useState } from 'react'

// import {isMobile} from 'react-device-detect'

import { WindowDimContext } from '../../App'

//--- Components
import Left from './Left/Left'
import Player from './Player/Player'
import Right from './Right/Right'


function Footer() {
    const { windowWidth } = useContext(WindowDimContext)
    
    const [mob, setMob] = useState("");
    
    useEffect((dim) => {
        if (windowWidth < 700){
            setMob("");
        }
        else {
            setMob("bottom");
        }
    }, [windowWidth]);

    return (
        <div
            className={`container-fluid fixed-${mob} bg-secondary m-0 p-0`}
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
