import React, { useState } from "react";

// COMPONENT
import CurrentTrack from "./CurrentTrack";
import VolumeManage from "./VolumeManage";

// REDUCER or CONTEXT
import { spotify } from "../../Reducer/useSpotify";
import { useDataLayerValue } from "../../Reducer/DataLayer";

// ICONS
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";



function PlayerButton({ item }) {
  const [{ playingState }, dispatch] = useDataLayerValue();
  const [state, setState] = useState({
    playState: playingState?.is_playing,
  });

  // Pause - Play
  const pausePlay = async () => {
    state.playState
      ? await spotify
          .pause()
          .then(() => {
            setState({ ...state, playState: false });
            console.log("Paused!!");
          })
          .catch((err) => console.log("err-pause: ", err))
      : await spotify
          .play()
          .then(() => {
            setState({ ...state, playState: true });
            console.log("Play!!");
          })
          .catch((err) => console.log("err-pause: ", err));
  };

  // Next
  const playNext = () => {
    console.log("NEXT!!");
    spotify
      .skipToNext()
      .then(() => console.log("Next!!"))
      .catch((err) => console.log("err-next: ", err.res));
  };

  // Previous
  const playPrevious = () => {
    spotify
      .skipToPrevious()
      .then(() => console.log("Previous!!"))
      .catch((err) => console.log("err-previous: ", err.res));
  };

  return (
    <>
      <div className="container-fluid fixed-bottom bg-success m-0 p-0">
        <div className="m-0 p-0 row row-cols-3 container-fluid">
          <CurrentTrack item={item} />
          <div className="m-0 p-0 col-5 container-fluid align-items-end bg-dark">
            <div className="row m-0 p-0 h-100 py-auto justify-content-around align-items-center">
              <SkipPrevious onClick={playPrevious} />
              <PlayCircleOutline onClick={pausePlay} />
              <SkipNext onClick={playNext} />
            </div>
          </div>
          <div className="bg-dark col-3 container-fluid m-0 p-0">
            <div className="row m-0 p-0 h-100 justify-content-around align-items-center">
              <VolumeManage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerButton;
