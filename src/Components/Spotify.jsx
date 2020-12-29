import React, { useEffect, useState } from 'react'

//---- Images
import Logo from '../Shared/Spoify/LogoGreen.png';
import Icon from '../Shared/Spoify/IconGreen.png';


function Spotify({ windowWidth, windowHeight }) {
    const [dim, setDim] = useState({
        logo: "16%",
        icon: "6%"
    })

    //----- DARK MODE

    useEffect((dim) => {
        if (windowWidth < 700)
            setDim({ ...dim, logo: "30%", icon: "8%" });
        else if (windowWidth > 700 && windowWidth < 900)
            setDim({ ...dim, logo: "15%", icon: "6%" });
        else {
            setDim({ ...dim, logo: "10%", icon: "4%" });
        }
    }, [windowWidth]);

    return (
        <div class="bg- text-center p-2 bg-dark ">
            <img src={Logo} alt="logo" width={dim.logo} className="" />
            <img src={Icon} alt="icon" width={dim.icon} className="float-right " />
            <br />
        </div>
    )
}

export default Spotify
