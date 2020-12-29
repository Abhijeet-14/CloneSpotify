import React from 'react';
import windowSize from 'react-window-size';
import './App.css';

//----  Components
import MyComponents from './Components/MyComponents';


export const WindowDimContext = React.createContext(windowSize);

function App(props) {
  return (
    <div className="App">
      <WindowDimContext.Provider value={props} >
        <MyComponents />
      </WindowDimContext.Provider>
    </div>
  );
}

export default windowSize(App);
