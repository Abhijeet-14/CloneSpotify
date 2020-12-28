import React from 'react';
import windowSize from 'react-window-size';
import './App.css';

//----  Components
import MyComponents from './Components/MyComponents';
import Spotify from './Components/Spotify';


export const WindowDimContext = React.createContext(windowSize);

function App({ windowHeight, windowWidth }) {
  
  return (
    <div className="App ">
      <Spotify windowHeight={windowHeight} windowWidth={windowWidth} class=""/> <br />
      
      <WindowDimContext.Provider value={{windowWidth, windowHeight}} >
        <MyComponents />
      </WindowDimContext.Provider>
    </div>
  );
}

export default windowSize(App);
