import React from "react";
import windowSize from "react-window-size";

// CUSTOM HOOK - Communicate with Spotify SERVER
import { useSpotify } from "./Reducer/useSpotify";
import { useDataLayerValue } from "./Reducer/DataLayer";

//----  Components
import Login from "./Components/Login";
import Profile from "./Components/Profile";

export const WindowDimContext = React.createContext(windowSize);


function App(props) {
  const [{token}, dispatch] = useDataLayerValue();

  //--- CUSTOM HOOK
  useSpotify(dispatch);

  return (
    <div className="container-fluid m-0 p-0 ">
      <WindowDimContext.Provider value={props}>
        {token ? <Profile /> : <Login />}
      </WindowDimContext.Provider>
    </div>
  );
}

export default windowSize(App);
