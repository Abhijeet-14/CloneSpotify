import React from 'react'

//--- COMPONENTS
import Feedback from './Feedback/Feedback'
import Header from './Header/Header'
import Home from './Home/Home'
import Library from './Library/Library'
import Playlist from './Playlist/Playlist'
import Player from './Player/Player'
import Recommendation from './Recommendation/Recommendation'
import Search from './Search/Search'
    
function Mobile(props) {
    return (
        <div>
           Mobile Spotify Clone!! <br />
           Window Width - {props.windowWidth} <br />
           Window height - {props.windowHeight} <br />
            <Header />
            <Home />
            <Search />
            <Library />
            <Playlist />
            <Recommendation />
            <Feedback />
            <Player/>
        </div>
    )
}

export default Mobile;
