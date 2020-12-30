import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//---- Images
import Logo from '../Shared/Spoify/LogoGreen.png';
import Icon from '../Shared/Spoify/IconGreen.png';

//--- useContext
import { WindowDimContext } from '../App'

function Spotify() {
    const { windowWidth } = useContext(WindowDimContext)

    const [dim, setDim] = useState({
        logo: "16%",
        icon: "6%"
    })

    //----- DARK MODE

    useEffect((dim) => {
        if (windowWidth < 700)
            setDim({ ...dim, logo: "30%", icon: "8%" });
        else if (windowWidth > 700 && windowWidth < 900)
            setDim({ ...dim, logo: "17%", icon: "6%" });
        else {
            setDim({ ...dim, logo: "10%", icon: "4%" });
        }
    }, [windowWidth]);

    return (
        <div class="conatiner-fluid sticky-top text-center m-0 p-2 bg-dark overflow-hidden"
            style={{height: ""}}
        >
            <Link to="/">
                <img src={Logo} alt="logo" width={dim.logo} className="" />
            </Link>
            <Link to="/">
                <img src={Icon} alt="icon" width={dim.icon} className="float-right " />
            </Link>
            <br />
        </div>
    )
}

export default Spotify
