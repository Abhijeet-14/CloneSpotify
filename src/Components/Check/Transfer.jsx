import { Button } from "@material-ui/core";
import React from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";
import { spotify } from "../../Reducer/useSpotify";

function Transfer() {
  const [{ token }, dispatch] = useDataLayerValue();

  // Transfer
  const transfer = () => {
    console.log("Transferring");

    const device_id = "";
    spotify
      .getMyDevices()
      .then((res) => console.log(res))
      .catch((err) => console.log("Err-device: ", err));

    fetch("https://api.spotify.com/v1/me/player", {
      body: JSON.stringify({ device_ids: [device_id] }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log("data: ", data))
      .catch((err) => console.log("err: ", err));
  };

  return (
    <div className="fixed-top">
      <button onClick={transfer}>Transfer</button>
    </div>
  );
}

export default Transfer;

// const transs = ({
//   playerInstance: {
//     _options: { getOAuthToken, id },
//   },
// }) => {
//   console.log(id, getOAuthToken);
//   getOAuthToken((token) => {
//     fetch(`https://api.spotify.com/v1/me/player`, {
//       method: "PUT",
//       body: JSON.stringify({ device_ids: [id] }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log("data: ", data))
//       .catch((err) => console.log("err: ", err));
//   });
// };

// transs({
//   playerInstance: new window.Spotify.Player({
//     name: "ABJ--",
//     getOAuthToken: (cb) => cb(token),
//   })
// });

// console.log(device_id);
// spotify.transferMyPlayback( JSON.stringify( {deviceIDs: [device_id]} ) )
//   .then(res => console.log("res: ", console.log(res)))
//   .catch(err => console.log("err: ", console.log(err.response)));
