import React from "react";
import { spotify } from "../../Reducer/useSpotify";

function PlayerButton() {
  const pausePlay = () => {
    spotify
      .play()
      .then((res) => console.log(res))
      .catch((err) => console.log("err: ", err.res));
  };

  const playNext = () => {
    spotify
      .skipToNext()
      .then((res) => console.log(res))
      .catch((err) => console.log("err: ", err.res));
  };

  const playPrev = () => {
    spotify
      .skipToPrev()
      .then((res) => console.log(res))
      .catch((err) => console.log("err: ", err.res));
  };

  const modVolume = () => {
    spotify
      .setVolume({ volume_percent: 20 })
      .then((res) => console.log(res))
      .catch((err) => console.log("err: ", err.res));
  };

  return (
    <div className="container-fluid justify-content-around bg-warning">
      <button onClick={pausePlay}>play</button>
      <button onClick={playPrev}>prev</button>
      <button onClick={pausePlay}>pause</button>
      <button onClick={playNext}>next</button>
      <button onClick={modVolume}>Volume</button>
    </div>
  );
}

export default PlayerButton;
