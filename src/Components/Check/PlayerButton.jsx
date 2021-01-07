import React from "react";
import { spotify } from "../../Reducer/useSpotify";
import {useDataLayerValue} from '../../Reducer/DataLayer';

function PlayerButton() {
  const [{ token }, dispatch] = useDataLayerValue();

  const pausePlay = async () => {
    // spotify.play()
    await fetch(`https://api.spotify.com/v1/me/player/pause&access_token=${token}`, {
      method : 'POST',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      // .catch((err) => console.log("err: ", err));
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
