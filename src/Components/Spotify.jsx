import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//---- Images
import Logo from '../Shared/Spoify/LogoWhite.png';
import Icon from '../Shared/Spoify/IconWhite.png';

//--- useContext
import { WindowDimContext } from '../App'

function Spotify() {
    const { windowWidth } = useContext(WindowDimContext)

    const [dim, setDim] = useState({
        logo: "65%",
        icon: "6%"
    })

    const [mob, setMob] = useState("");

    
    //----- DARK MODE

    useEffect((dim) => {
        if (windowWidth < 700){
            setMob("top");
            setDim({ ...dim, logo: "37%", icon: "8%" });
        }
        else if (windowWidth > 700 && windowWidth < 900){
            setMob("");
            setDim({ ...dim, logo: "65%", icon: "6%" });
        }
        else {
            setMob("");
            setDim({ ...dim, logo: "65%", icon: "4%" });
        }
    }, [windowWidth]);

    return (
        <div class={`conatiner-fluid text-center fixed-${mob} m-0 p-2 bg-dark overflow-hidden`}
            style={{height: ""}}
        >
            <Link to="/">
                <img src={Logo} alt="logo" width={dim.logo} className="p-2" />
            </Link>
            <Link to="/">
                <img src={Icon} alt="icon" width={dim.icon} className="float-right " />
            </Link>
            <br />
        </div>
    )
}

export default Spotify
