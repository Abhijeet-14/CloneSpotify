import React from 'react'
import { Grid, makeStyles, withStyles } from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import ShuffleIcon from "../../_icons/SpotifyShuffle";
// import RepeatIcon from "../../_icons/SpotifyRepeat.jsx";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 9,
    minWidth: "150px",
    // maxWidth: "440px",
  },
  colorPrimary: {
    backgroundColor: "#535353",
  },
  bar: {
    borderRadius: 9,
    backgroundColor: "#B3B3B3",
    "&:hover, &:active, &:focus": {
      backgroundColor: "#1DB954",
    },
  },
}))(LinearProgress);

const PlayerControls = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(true);
  const [progress, setProgress] = React.useState(30);
  React.useState(() => {
    const timer = setInterval(() => {
      setProgress((prog) => (prog > 70 ? 0 : prog + 10));
    }, 1000);
    return () => clearInterval(timer);
  });

  console.log(progress);
  return (
    <Grid item container direction="column" spacing={2} alignItems="center">
      <Grid container item spacing={4} justify="center" alignItems="center">
        <Grid item>
          <ShuffleIcon
            color="primary"
            fontSize="small"
            className={classes.icons}
          />
        </Grid>
        <Grid item>
          <SkipPreviousIcon color="primary" className={classes.icons} />
        </Grid>
        <Grid item onClick={() => setState(!state)}>
          {!state && (
            <PauseCircleOutlineIcon
              fontSize="large"
              color="primary"
              className={classes.icons}
            />
          )}
          {state && (
            <PlayCircleOutlineIcon
              fontSize="large"
              color="primary"
              className={classes.icons}
            />
          )}
        </Grid>
        <Grid item>
          <SkipNextIcon color="primary" className={classes.icons} />
        </Grid>
        <Grid item>
          <RepeatIcon
            color="primary"
            fontSize="small"
            className={classes.icons}
          />
        </Grid>
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <BorderLinearProgress
          variant="determinate"
          value={progress}
        />
      </Grid>
    </Grid>
  );
};

export default PlayerControls

const useStyles = makeStyles({
  icons: {
    "&:hover, &$active, &:focus":{
      color: "#1DB954"
    }
  }
})