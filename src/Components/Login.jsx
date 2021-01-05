import React from 'react'

import logo from '../Shared/Spoify/LogoWhite.png';

import {loginUrl} from './spotifyData'

function Login() {

    return (
        <div className="min-vh-100" style={styles.login}>
            <img src={logo} alt="Spotify Clone" style={styles.loginImg}/>
            <a href={loginUrl} className="border-0" style={styles.loginLink }>Login with Spotify</a>
        </div>
    )
}

export default Login


// JSON based styleing
const styles = {
    login:{
        "display": "grid",
        "placeItems": "center",
        "backgroundColor": "black",

    },
    loginImg:{
        "width": "100%",
    },
    loginLink: {
        "backgroundColor": "#1db954",
        "color": "white",
        "fontSize": "30px",
        "borderRadius": "99px",
        "padding": "20px"
    }
}