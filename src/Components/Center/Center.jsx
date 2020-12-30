import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import gradient from '../colorGradient'

//--- COMPONENTS
import Error from './Error/Error'
import Feedback from './Feedback/Feedback'
import Home from './Home/Home'
import Library from './Library/Library'
import Playlist from './Playlist/Playlist'
import PlaylistDetails from './Playlist/PlaylistDetails'
import Recommendation from './Recommendation/Recommendation'
import Search from './Search/Search'

//--- useContext
import { WindowDimContext } from '../../App'

function Center() {
    const { windowWidth, windowHeight } = useContext(WindowDimContext)

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (windowWidth < 900)
            setMobile(true);
        else
            setMobile(false);
    }, [windowWidth])

    return (
        <div class="container-fluid text-white align-items-center"
            style={{
                background: `linear-gradient(${gradient.grad1.deg}, ${gradient.grad3.color1}, ${gradient.grad3.color2} ${gradient.grad3.percentage})`,
                color: 'black',
                justifyContent: 'center',
                // height: "100%"
            }}
        >
            <div className="row justify-content-center">
                {mobile && <div> Mobile Spotify Clone!!</div>}
                {!mobile && <div> Desktop Spotify Clone!!</div>}
                Window Width - {windowWidth},
                Window height - {windowHeight}<br />
            </div>
            <div className="row justify-content-center">
                <Switch>
                    <Route
                        path="/search"
                        render={(props) => <Search sortBy="time!" {...props} />}
                    />
                    {/* ROUTE PARAMETERS */}
                    <Route path="/playlist/:id" component={PlaylistDetails} />
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
        </div>
    )
}

export default Center
