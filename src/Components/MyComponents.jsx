import React from 'react'

//--- Components
import Center from './Center/Center';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Spotify from './Spotify';


function MyComponents(props) {
    // const url = "https://localhost:3003/songs/"
    return (
        <div className="container-fluid min-vh-100 m-0 p-0 bg-danger">
            <Spotify className=" m-0 p-0" />
            <div className="d-flex flex-md-row flex-column-reverse w-100 m-0 p-0" >
                <Header className="m-0 w-25" />
                <Center className="m-0 p-0 w-75" />
                {/* <div className="row bg-success m-0 p-0">
                </div> */}
            </div>
            <Footer className="row m-0" />
        </div>
    )
}

export default MyComponents;
