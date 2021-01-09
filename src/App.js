import React from "react";
import windowSize from "react-window-size";

// CUSTOM HOOK - Communicate with Spotify SERVER
import { useSpotify } from "./Reducer/useSpotify";
import { useDataLayerValue } from "./Reducer/DataLayer";

//----  Components
import Login from "./Components/Login";
import Profile from "./Components/Check/Profile";

export const WindowDimContext = React.createContext(windowSize);

function App(props) {
  const [{ token }, dispatch] = useDataLayerValue();

  window._token = token;
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






// import React, { Component } from "react";
// import Script from "react-load-script";
// import "./App.css";
// import { loginUrl } from "./Components/spotifyData";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {__token: ""};
//     this.handleLoadSuccess = this.handleLoadSuccess.bind(this);
//     this.handleLoadFailure = this.handleLoadSuccess.bind(this);
//     this.cb = this.cb.bind(this);
//     this.pause = this.pause.bind(this);
//   }

//   componentDidMount() {
//     const hash = window.location.hash // it goes to the hash in the location.
//       .substring(1) // copy from 1st string
//       .split("&") // split over '&'
//       .reduce((initial, item) => {
//         let parts = item.split("=");

//         initial[parts[0]] = decodeURIComponent(parts[1]);
//         return initial;
//       }, {});

//     const { access_token } = hash;
    
//     this.setState({ __token: access_token});

//     window.onSpotifyWebPlaybackSDKReady = () => {
//       this.handleLoadSuccess(access_token);
//     };
//   }

//   handleLoadSuccess(_token) {
//     this.setState({ scriptLoaded: true });
//     console.log("Script success");
//     // const token =
//     //   "BQByzasxIkuBRN5QyhfTUNe8Ckbm0OsjeEUqNLAJJnRxskeO-hmQg9QDf725Wd_HJiA8ln4jKTPfNcoyqIfdQOB3Jdzb_3rTw-TGIm-VuJwb7-_inAxn08rsqoCCL2C1ARCuGfhV78odpLEWhDIIkrMqG7mg1xgXVQLaY_IXpNPWJply9UUZ8mn0XAh86eZ0fb-3asLz0_yUP4jIzo5cAA7YsiFm9ikvlV1RiZCX40Q52FrIXX-BFJpd_HezvDdnp3tJxXtAme5lqH5_Q-fYlI65k65uK7updObYa85LtpA";
//     const player = new window.Spotify.Player({
//       name: "Web Playback SDK Quick Start Player",
//       getOAuthToken: (cb) => {
//         cb(_token);
//       },
//     });
//     console.log(player);

//     // Error handling
//     player.addListener("initialization_error", (error) => {
//       console.log("error-initi", error);
//     });
//     player.addListener("authentication_error", (error) => {
//       console.log("error-auth", error);
//     });
//     player.addListener("account_error", (error) => {
//       console.log("error-acc", error);
//     });
//     player.addListener("playback_error", (error) => {
//       console.log("error-play", error);
//     });

//     // Playback status updates
//     player.addListener("player_state_changed", (state) => {
//       console.log(state);
//     });

//     // Ready
//     player.addListener("ready", ({ device_id }) => {
//       console.log("Ready with Device ID", device_id);
//     });

//     // Not Ready
//     player.addListener("not_ready", ({ device_id }) => {
//       console.log("Device ID has gone offline", device_id);
//     });

//     // Connect to the player!
//     player.connect();
//   }

//   cb(token) {
//     return token;
//   }

//   handleScriptCreate() {
//     this.setState({ scriptLoaded: false });
//     console.log("Script created");
//   }

//   handleScriptError() {
//     this.setState({ scriptError: true });
//     console.log("Script error");
//   }

//   handleScriptLoad() {
//     this.setState({ scriptLoaded: true });
//     console.log("Script loaded");
//   }

//   pause() {
//     console.log(this.state.__token);
//     const play = ({
//       spotify_uri,
//       playerInstance: {
//         _options: { getOAuthToken, id },
//       },
//     }) => {
//       console.log(id, getOAuthToken);
//       getOAuthToken((access_token) => {
//         console.log(access_token);
//         fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
//           //  `, {
//           method: "PUT",
//           //  body: JSON.stringify({ device_ids: [id] }),
//           body: JSON.stringify({ uris: [spotify_uri] }),
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${access_token}`,
//           },
//         })
//           .then((res) => res.json())
//           .then((data) => console.log("data: ", data))
//           .catch((err) => console.log("err: ", err));
//       });
//     };

//     if (window.Spotify)
//       play({
//         playerInstance: new window.Spotify.Player({
//           name: "ABJ--",
//           getOAuthToken: (cb) => cb(this.state.__token),
//           volume: 1,
//         }),
//         spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr",
//       });
//   }

//   render() {
//     console.log(this.state.__token);
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Script
//             url="https://sdk.scdn.co/spotify-player.js"
//             // onCreate={this.handleScriptCreate.bind(this)}
//             onError={this.handleScriptError.bind(this)}
//             onLoad={this.handleScriptLoad.bind(this)}
//             type="javascript"
//           />
//           <a href={loginUrl}>click</a>
//           <button onClick={() => this.pause(this)}>PLAY</button>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;
