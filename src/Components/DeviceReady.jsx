/*
*
* EME - External Media Extension,  it works in SECURE CONNECTION... https works... but not http
*  HTTPS: Secure 
*   http://localhost:3000/ - OK (WORKS)  
*   https://clone-spotify-rts.netlify.app/ - OK (WORKS)  
*
* HTTP: Not Secure
*   http://192.162.1.10:3000/ - NOT OK   
*   https://192.162.1.10:3000/ - NOT OK (cause it's INVALID URL)  
*
* use HTTPS & localhost only.
*
*/

import React from "react";
import Script from "react-load-script";
import { useDataLayerValue } from "../Reducer/DataLayer";

function DeviceReady() {
  const [{ token }, dispatch] = useDataLayerValue();

  // Component Did Mount
  React.useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      handleLoadSuccess();
    };
  }, []);

  const handleLoadSuccess = () => {
    console.log("Script loaded:\n", token);
    initializePlayer(token);
  };

  const handleScriptLoad = () => {
    console.log("Script Loading:\n", token);
    // return new Promise((resolve) => {
    //   if (window.Spotify) {
    //     resolve();
    //   } else {
    //     window.onSpotifyWebPlaybackSDKReady = resolve;
    //   }
    // });
  };

  const handleScriptCreate = () => {
    console.log("Script created:\n", token);
  };

  const handleScriptError = () => {
    console.log("Script error:\n", token);
  };

  return (
    <div className="App">
      <header className="App-header fixed-top text-center">
        <Script
          url="https://sdk.scdn.co/spotify-player.js"
          onCreate={handleScriptCreate}
          onError={handleScriptError}
          onLoad={handleScriptLoad}
        />
        <button onClick={() => transferMyPlayback(token)}>Transfer</button>
      </header>
    </div>
  );
}

export default DeviceReady;

/*
 *
 *  Inititalize Player
 *
 */
const initializePlayer = (token) => {
  console.log("Initializzz: ", token);
  var volume = 0.5;

  const name = "ABCD";

  const player = new window.Spotify.Player({
    getOAuthToken: (cb) => cb(token),
    name: name,
    volume: volume,
  });

  console.log("player: ", player);

  player.addListener("initialization_error", ({ message }) => {
    console.error(message, token);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message, token);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message, token);
  });

  player.addListener("playback_error", ({ message }) => {
    console.error(message, token);
  });

  player.addListener("player_state_changed", (state) => {
    console.log("a: ", state);
  });

  player.addListener("ready", (state) => {
    console.log("Ready with Device ID", state);
  });

  player.addListener("not_ready", (state) => {
    console.log("Device ID has gone offline", state);
  });

  player
    .connect()
    .then((success) => console.log("result::: ", success))
    .catch((err) => console.log("err-result:: ", err));
};


/*
 *
 *  Transfer My PlayBack to current device
 *
 */
function transferMyPlayback(token) {
  console.log("Pause is working!!", token);
  const play = ({
    spotify_uri,
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) => {
    console.log("GetOAuth: ", id, getOAuthToken);
    getOAuthToken((access_token) => {
      console.log("Inside OAuth: ", access_token);
      fetch(`https://api.spotify.com/v1/me/player`, {
        // /play?device_id=${id}`, {
        method: "PUT",
        body: JSON.stringify({ device_ids: [id] }),
        // body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("data: ", data))
        .catch((err) => console.log("err: ", err));
    });
  };

  play({
    playerInstance: new window.Spotify.Player({
      name: "ABJJJJJ--",
      getOAuthToken: (cb) => cb(token),
      volume: 1,
    }),
    spotify_uri: "spotify:track:6pe0FG3XseFHT3SaaMw5M5",
  });
}
