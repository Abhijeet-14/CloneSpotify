import React from 'react'

//--- Components
import Feedback from './Feedback/Feedback'
import Header from './Header/Header'
import Home from './Home/Home'
import Library from './Library/Library'
import Playlist from './Playlist/Playlist'
import Player from './Player/Player'
import Recommendation from './Recommendation/Recommendation'
import Search from './Search/Search'
    
function Desktop() {
    return (
        <div>
            Desktop Spotify Clone
            <Header />
            <Home />
            <Search />
            <Library />
            <Playlist />
            <Recommendation />
            <Feedback />
            <Player />
        </div>
    )
}

export default Desktop
