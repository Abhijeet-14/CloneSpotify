import React from "react";
import {
  Grid,
  makeStyles,
  Slider,
  withStyles,
  withWidth,
} from "@material-ui/core";
// Icons
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import VolumeMute from "@material-ui/icons/VolumeMute";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import { spotify } from "../../../Reducer/useSpotify";

function PlayerRight({ width }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={4}
      alignItems="center"
      justify="flex-end"
      style={{ padding: "0 0 0 12px" }}
    >
      <Grid item style={{ alignItems: "flex-end" }}>
        <QueueMusicIcon
          fontSize="small"
          color="primary"
          className={classes.icons}
        />
      </Grid>
      <Grid item>
        <SpeakerGroupIcon
          fontSize="small"
          color="primary"
          className={classes.icons}
        />
      </Grid>
      <Grid item>
        <VolumeBar width={width} />
      </Grid>
    </Grid>
  );
}

export default withWidth()(PlayerRight);

const VolumeBar = ({ width }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    vol: 75,
    mute: false,
  });

  // Volume Controls
  // 33.33 66.66
  React.useEffect(() => {
    var volume = 80;
    state.mute ? (volume = 0) : (volume = state.vol);

    const changeVolume = async () => {
      await spotify
        .setVolume(volume)
        .catch((err) => console.log("err-volume: ", err));
    };

    changeVolume();
  }, [state]);

  const handleChange = (event, newVol) => {
    newVol < 1
      ? setState({ ...state, vol: 0, mute: true })
      : setState({ ...state, vol: newVol, mute: false });
  };

  const isMute = () => {
    setState({ ...state, mute: !state.mute });
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      style={{ flexGrow: 1 }}
      // className="bg-success"
    >
      <Grid item onClick={() => isMute()}>
        {state.mute && <VolumeOff color="primary" style={{ color: "#1DB954" }} />}

        {!state.mute && state.vol <= 3 && <VolumeMute />}
        {!state.mute && state.vol > 3 && state.vol < 66.66 && (
          <VolumeDown color="primary" />
        )}
        {!state.mute && state.vol >= 66.66 && <VolumeUp color="primary" />}
      </Grid>
      {width !== "sm" ? (
        <Grid item className={classes.slider}>
          <PrettoSlider
            aria-label="pretto slider"
            value={state.vol}
            onChange={handleChange}
          />
        </Grid>
      ) : (
        <Grid
          item
          style={{
            height: 100,
            margin: "-135px 0 0 -42px",
          }}
          className={classes.vertical_slider}
        >
          <PrettoSlider
            aria-label="pretto slider"
            value={state.vol}
            onChange={handleChange}
            orientation="vertical"
          />
        </Grid>
      )}
    </Grid>
  );
};

const PrettoSlider = withStyles({
  root: {
    color: "primary",
    height: 8,
  },
  thumb: {
    height: 0,
    width: 0,
    "&:focus, &:hover, &$active": {
      color: "#fff",
      height: 16,
      width: 16,
      marginTop: -6,
      marginLeft: -12,
      boxShadow: "inherit",
    },
  },
  active: {},
  track: {
    height: 6,
    borderRadius: 4,
    "&:focus, &:hover, &$active": {
      color: "#1DB954",
    },
  },
  rail: {
    height: 6,
    borderRadius: 4,
    backgroundColor: "#999",
    color: "primary",
  },
})(Slider);

const useStyles = makeStyles({
  icons: {
    "&:hover, &:active, &:focus":{
      color: "#1DB954"
    }
  },
  slider: {
    color: "#B3B3B3",
    margin: "8px 5px 0 2px",
    minWidth: "100px",
    maxWidth: "140px",
    flexGrow: 1,
    "&:hover, &:focus, &$active": {
      color: "#1DB954",
    },
  },
  vertical_slider: {
    "&>span": {
      "& .MuiSlider-track":{
        width: "6px",
      },
      "& .MuiSlider-rail":{
        width: "6px",
      },
      "& .MuiSlider-thumb":{
        width: "0px",
        height: "0px",
      },
    },
  },
});
