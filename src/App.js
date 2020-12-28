import React, { useEffect, useState } from 'react';
import windowSize from 'react-window-size';
import './App.css';

//----  Components
import Desktop from './Components/Desktop';
import Mobile from './Components/Mobile';
import Spotify from './Components/Spotify';


function App({ windowHeight, windowWidth }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    windowWidth < 900 ? setMobile(true) : setMobile(false);
  }, [windowWidth])

  return (
    <div className="App ">
      <Spotify windowHeight={windowHeight} windowWidth={windowWidth} class=""/> <br />
      { 
        mobile ?
          <Mobile windowHeight={windowHeight} windowWidth={windowWidth} />
          :
          <Desktop />
      }
    </div>
  );
}

export default windowSize(App);
