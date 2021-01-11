import React from "react";

import { useDataLayerValue } from "../../Reducer/DataLayer";
import { spotify } from "../../Reducer/useSpotify";

function Transfer() {
  const [{ token }, dispatch] = useDataLayerValue();

  // Get User Available Devices:
  const getUserDevices = () => {
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
    <div className="fixed-to float-right bg-danger">
      <button onClick={getUserDevices}>Transfer</button>
    </div>
  );
}

export default Transfer;
