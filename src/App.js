import React from 'react';
import windowSize from 'react-window-size';
// import 'bootstrap-icons'

//----  Components
import MyComponents from './Components/MyComponents';


export const WindowDimContext = React.createContext(windowSize);

function App(props) {
  return (
    <div
      className="container-fluid m-0 p-0 "
    >
      <WindowDimContext.Provider value={props} >
        <MyComponents />
      </WindowDimContext.Provider>

      {/* <div className="row w-100 bg-warning p-0 m-0 ">
        <div className="col-4 text-white text-left"
          style={{
            background: `linear-gradient(${gradient.grad1.deg}, ${gradient.grad3.color1}, ${gradient.grad3.color2} ${gradient.grad3.percentage})`,
            color: 'black',
            justifyContent: 'center'
          }}
        >
          ABCD
        </div>
        <div className="col-3 bg-danger text-white text-center">
          B
        </div>
        <div className="col-5 bg-secondary text-white text-right">
          ABCD <br />
          <i class="bi bi-alarm"></i>
        </div>
      </div>
      <div className="sticky-top row m-0 p-3 bg-warning"
        style={{
          '--color-1': '#1DB954', '--color-2': '#191434',
          background: `linear-gradient(120deg, var(--color-1), var(--color-2) 87%)`,
          color: 'white',
          justifyContent: 'center'
        }}
      >
        Bottom
      </div> */}
    </div>
  );
}

export default windowSize(App);
