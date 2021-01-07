import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import gradient from "../colorGradient";

//--- COMPONENTS
import Error from "./Error/Error";
import Feedback from "./Feedback/Feedback";
import Home from "./Home/Home";
import Library from "./Library/Library";
import Playlist from "./Playlist/Playlist";
import PlaylistDetails from "./Playlist/PlaylistDetails";
import Recommendation from "./Recommendation/Recommendation";
import Search from "./Search/Search";

//--- useContext
import { WindowDimContext } from "../../App";
import { useDataLayerValue } from "../../Reducer/DataLayer";

function Center() {
  const { windowWidth, windowHeight } = useContext(WindowDimContext);
  const [mobile, setMobile] = useState(false);

  const [{ user }] = useDataLayerValue();

  useEffect(() => {
    if (windowWidth < 900) setMobile(true);
    else setMobile(false);
  }, [windowWidth]);

  console.log(user);
  return (
    <div
      class="container-fluid text-white align-items-center m-0 h-100"
      style={{
        background: `linear-gradient(${gradient.grad1.deg}, ${gradient.grad3.color1}, ${gradient.grad3.color2} ${gradient.grad3.percentage})`,
        color: "black",
        justifyContent: "center",
        // height: "93%",
      }}
    >
      <div className="row justify-content-center">
        {mobile && <div> Mobile Spotify Clone!!</div>}
        {!mobile && <div> Desktop Spotify Clone!!</div>}
        Window Width - {windowWidth}, Window height - {windowHeight}
        <br />
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
      <div className="row justify-content-center align-items-end">
        <img src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Center;
