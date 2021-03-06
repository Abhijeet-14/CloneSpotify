import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import {App1} from "./App" 
import {App2} from "./App" 
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
//--------- CONTEXT API & REDUCER
import { DataLayer } from "./Reducer/DataLayer";
import reducer, { initialState } from "./Reducer/reducer";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        {/* <App /> */}
        {/* <App1 /> */}
        <App2 />
      </DataLayer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//
if (module.hot) {
  module.hot.accept();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
