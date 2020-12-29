import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

//--- COMPONENTS
import Error from './Error/Error'
import Feedback from './Feedback/Feedback'
import Header from './Header/Header'
import Home from './Home/Home'
import Library from './Library/Library'
import Playlist from './Playlist/Playlist'
import PlaylistDetails from './Playlist/PlaylistDetails'
import Player from './Player/Player'
import Recommendation from './Recommendation/Recommendation'
import Search from './Search/Search'


// useContext
import { WindowDimContext } from '../App'

function MyComponents(props) {

    const { windowWidth, windowHeight } = useContext(WindowDimContext)

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (windowWidth < 900)
            setMobile(true);
        else
            setMobile(false);
    }, [windowWidth])

    return (
        <div className="container-fluid bg-danger m-0">
            <Header className="row" />
            <div class="row center bg-dark justify-content-center">
                <div className=" bg-primary ">
                    {mobile && <div> Mobile Spotify Clone!!</div>}
                    {!mobile && <div> Desktop Spotify Clone!!</div>}
                    Window Width - {windowWidth},  
                    Window height - {windowHeight}<br />
                </div>
            </div>
            <div className="row content bg-warning justify-content-center">
                <Switch>
                    <Route
                        path="/search"
                        render={(props) => <Search sortBy="time!" {...props} />}
                    />
                    {/* ROUTE PARAMETERS */}
                    <Route path="/playList/:id" component={PlaylistDetails} />
                    {/* OPTIONAL ROUTE PARAMETERS */}
                    <Route path="/feedback/:month?/:year?" component={Feedback} />
                    {/* QUERY STRING */}
                    <Route path="/library" render={(props) => <Library {...props} />} />

                    <Route path="/playlist" render={() => <Playlist />} />
                    <Route path="/feedback" render={() => <Feedback />} />
                    <Route path="/recommendation" render={() => <Recommendation />} />
                    <Route path="/not-found" component={Error} />
                    <Route path="/home" render={() => <Home />} />

                    {/* REDIRECT */}
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
            <Player className="row" />
        </div>
    )
}

export default MyComponents;
