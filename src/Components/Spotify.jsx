import React, { useEffect, useState } from 'react'

//---- Images
import Logo from '../Shared/Spoify/LogoGreen.png';
import Icon from '../Shared/Spoify/IconGreen.png';


function Spotify({windowWidth, windowHeight}) {
    const [dim, setDim] = useState({
        logo: "16%",
        icon: "6%"
    })

    //----- DARK MODE

    useEffect( () => {
        if(windowWidth < 700) 
            setDim({...dim, logo:"40%", icon: "14%" });
        else if(windowWidth > 700 && windowWidth < 900) 
            setDim({...dim, logo:"21%", icon: "8%" });
        else{
            setDim({...dim, logo:"16%", icon: "6%" });
        }
    },[windowWidth, dim]);

    return (
        <div class="bg- text-center p-2 bg-dark ">
            <img src={Logo} alt="logo" width={dim.logo} class=""/>
            <img src={Icon} alt="icon" width={dim.icon} class="float-right "/>
            <br />
        </div>
    )
}

export default Spotify
