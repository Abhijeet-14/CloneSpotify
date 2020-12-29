import React from 'react'

//--- Components
import Center from './Center/Center';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Spotify from './Spotify';


function MyComponents(props) {

    return (
        <div className="container-fluid bg-danger m-0 p-0">
            <Spotify className="row"/>
            <Header className="row" />
            <Center className="row" />
            <Footer className="row" />
        </div>
    )
}

export default MyComponents;
