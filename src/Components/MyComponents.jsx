import React, { useContext, useEffect, useState } from 'react'
import {Route} from 'react-router-dom'

//--- COMPONENTS
// import Error from './Error/Error'
import Feedback from './Feedback/Feedback'
import Header from './Header/Header'
import Home from './Home/Home'
import Library from './Library/Library'
import Playlist from './Playlist/Playlist'
import Player from './Player/Player'
import Recommendation from './Recommendation/Recommendation'
import Search from './Search/Search'


// useContext
import { WindowDimContext } from '../App'

function MyComponents(props) {

    const {windowWidth, windowHeight} = useContext(WindowDimContext)
    
    const [mobile, setMobile] = useState(false)
    
    useEffect( ()=> {
        if(windowWidth<900)
            setMobile(true);
        else
            setMobile(false);
    },[windowWidth, mobile])

    return (
        <>
            {mobile && <p> Mobile Spotify Clone!! </p> }
            {!mobile && <p> Desktop Spotify Clone!! </p> }
            Window Width - {windowWidth}<br />
            Window height - {windowHeight}<br />
            <Header />
            <div class="content">
                <Route path="/" component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/library" component={Library}/>
                <Route path="/playList" component={Playlist}/>
                <Route path="/feedback" component={Feedback}/>
                <Route path="/recommendation" component={Recommendation}/>
                {/* <Route component={Error} /> */}
            </div>
            <Player />
        </>
    )
}

export default MyComponents;
