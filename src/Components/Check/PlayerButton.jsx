import React from "react";
import { spotify } from "../../Reducer/useSpotify";
import { useDataLayerValue } from "../../Reducer/DataLayer";

function PlayerButton() {
  const [{ token }, dispatch] = useDataLayerValue();

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
  };

  const pause = async () => {
    spotify
      .pause()
      .then(() => console.log("Paused!!"))
      .catch((err) => console.log("err-pause: ", err));
  };
  
  const play = async () => {
    spotify
      .play()
      .then(() => console.log("Play!!"))
      .catch((err) => console.log("err-play: ", err));
  };

  const playNext = () => {
    console.log("NEXT!!");
    spotify
      .skipToNext()
      .then(() => console.log("Next!!"))
      .catch((err) => console.log("err-next: ", err.res));
  };

  const playPrevious = () => {
    spotify
      .skipToPrevious()
      .then(() => console.log("Previous!!"))
      .catch((err) => console.log("err-previous: ", err.res));
  };

  const modVolume = () => {
    spotify
      .setVolume(30)
      .then(() => console.log("Volume!!"))
      .catch((err) => console.log("err volume: ", err));
  };

  return (
    <>
      <button onClick={transfer}>Transfer</button>
      <div className="container-fluid justify-content-around bg-warning">
        <button onClick={play}>play</button>
        <button onClick={playPrevious}>prev</button>
        <button onClick={pause}>pause</button>
        <button onClick={playNext}>next</button>
        <button onClick={modVolume}>Volume</button>
      </div>
    </>
  );
}

export default PlayerButton;
