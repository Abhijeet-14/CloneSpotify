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

import { Grid, withStyles } from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "../../NewComponent/_icons/SpotifyShuffle";
import RepeatIcon from "../../NewComponent/_icons/SpotifyRepeat.jsx";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

function PlayerButton({ item }) {
  const [{ playingState }, dispatch] = useDataLayerValue();
  const [state, setState] = useState({
    playState: playingState?.is_playing,
  });

  const [progress, setProgress] = React.useState(30);
  React.useState(() => {
    const timer = setInterval(() => {
      setProgress((prog) => (prog > 70 ? 0 : prog + 10));
    }, 1000);
    return () => clearInterval(timer);
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
            <div className="row m-0 p-0 h-50 py-auto justify-content-around align-items-center">
              {/* <SkipPrevious onClick={playPrevious} />
              <PlayCircleOutline onClick={pausePlay} />
              <SkipNext onClick={playNext} /> */}
              <ShuffleIcon />
              <SkipPreviousIcon />
              <PauseCircleOutlineIcon
                fontSize="large"
                style={{ color: "green" }}
              />
              <PlayCircleOutlineIcon
                fontSize="large"
                style={{ color: "green" }}
              />
              <SkipNextIcon />
              <RepeatIcon />
            </div>
            <div
              className=" bg-success "
              style={{ margin: "20px" }}
            >
              <BorderLinearProgress variant="determinate" value={progress} />
            </div>
          </div>
          <div className="bg-dark col-3 container-fluid m-0 p-0">
            <div className="row m-0 p-0 h-100 justify-content-around align-items-center">
              <QueueMusicIcon fontSize="small" color="primary" />
              <SpeakerGroupIcon fontSize="small" color="primary" />
              <VolumeManage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerButton;

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 5,
    borderRadius: 9,
    minWidth: "150px",
    maxWidth: "440px",
  },
  colorPrimary: {
    backgroundColor: "#B3B3B3",
  },
  bar: {
    borderRadius: 9,
    backgroundColor: "green",
  },
}))(LinearProgress);
