import React from "react";
import windowSize from "react-window-size";

// CUSTOM HOOK - Communicate with Spotify SERVER
import { useSpotify } from "./Reducer/useSpotify";

//----  Components
import Login from "./Components/Login";
import { useDataLayerValue } from "./Reducer/DataLayer";
import Profile from "./Components/Profile";
// import MyComponents from "./Components/MyComponents";

export const WindowDimContext = React.createContext(windowSize);


function App(props) {
  const [{ token }, dispatch] = useDataLayerValue();

  //--- CUSTOM HOOK
  useSpotify(dispatch);
  
  // console.log("token ",token);

  // const name = "Loading";

  return (
    <div className="container-fluid m-0 p-0 ">
      <WindowDimContext.Provider value={props}>
        {token ? (
          <section>
            <Profile />
          </section>
        ) : (
          <Login />
        )}
        {/* <MyComponents />  */}
      </WindowDimContext.Provider>
    </div>
  );
}

export default windowSize(App);
