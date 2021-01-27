import React from "react";
import { spotify } from "../../Reducer/useSpotify";

import { Grid, makeStyles, Slider } from "@material-ui/core";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import VolumeMute from "@material-ui/icons/VolumeMute";

const VolumeManage = () => {
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
        // .then(() => console.log("Volume!!", state.vol))
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
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item onClick={() => isMute()}>
          {state.mute && <VolumeOff />}

          {!state.mute && state.vol <= 3 && <VolumeMute />}
          {!state.mute && state.vol > 3 && state.vol < 66.66 && <VolumeDown />}
          {!state.mute && state.vol >= 66.66 && <VolumeUp />}
        </Grid>
        <Grid item xs>
          <Slider
            value={state.vol}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            className="mt-2"
            style={{color: "green"}}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default VolumeManage;

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: 0,
    padding: "20px 20px 20px 0",
    alignItems: "center",
  },
});
