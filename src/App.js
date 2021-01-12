import React from "react";
import windowSize from "react-window-size";

// CUSTOM HOOK - Communicate with Spotify SERVER
import { useDataLayerValue } from "./Reducer/DataLayer";
import { useCodeToToken, useUrlToToken } from "./Reducer/useGenerateToken";

//----  Components
// import MyComponents from "./Components/MyComponents";
import Login from "./Components/Login";
import Profile from "./Components/Check/Profile";
import ReGenerate from "./Components/Check/ReGenerate";


// TRY: MATERIAL UI - COMPONENTS
import MaterialUI from "./_Comp_MaterialUI/MaterialUI";



export const WindowDimContext = React.createContext(windowSize);

function App(props) {
  const [{ newVal, token }, dispatch] = useDataLayerValue();

  // Generate Token BY URL
  useUrlToToken(dispatch)

  // Generate Token BY CODE
  // useCodeToToken(dispatch);  

  return (
    <div className="container-fluid m-0 p-0 ">
      <WindowDimContext.Provider value={props}>
        {newVal?.refresh_token && <ReGenerate />}
        {token ? <Profile /> :  <Login />}
        {/* <MyComponents /> */}
      </WindowDimContext.Provider>  
    </div>
  );
}

export default windowSize(App);


export const App1 = () => {
  return (
    <MaterialUI />
  )
}
