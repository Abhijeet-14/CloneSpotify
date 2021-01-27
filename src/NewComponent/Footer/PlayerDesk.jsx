import React from "react";
import { Grid,  makeStyles, } from "@material-ui/core";

// Player right
import PlayerRight from "./Player/PlayerRight";

// Player center
import PlayerControls from "./Player/PlayerControls";

// Player lert
import SongDetails from "./Player/SongDetails";

function PlayerDesk({width}) {
  const screenWidth = width;
  const classes = useStyles({screenWidth});
  return (
    <Grid
      container
      justify="space-between"
      direction="row"
      className={classes.root}
    >
      <Grid item sm={4} className={classes.left}>
        <SongDetails />
      </Grid>
      <Grid item sm={5} className={classes.center}>
        <PlayerControls />
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <PlayerRight />
      </Grid>
    </Grid>
  );
}

export default PlayerDesk;

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: "0px 16px",
    alignItems: "center",
    height: ({screenWidth}) => screenWidth === 'sm' ? "85px" : "99px",
    backgroundColor: "#282828",
  },
  left: {
    // backgroundColor: "#838",
    maxWidth: "440px",
    minWidth: "180px",
  },
  center: {
    // backgroundColor: "#000",
    maxWidth: "480px",
    minWidth: "200px",
  },
  right: {
    // backgroundColor: "#838",
    maxWidth: "440px",
    minWidth: "180px",
    justifyContent: "end",
  },
});
