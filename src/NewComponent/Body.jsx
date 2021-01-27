import React from "react";
import { Hidden, makeStyles, } from "@material-ui/core";

import BodyDesk from "./Body/BodyDesk";
import BodyMob from "./Body/BodyMob";
import SongList from "./List/SongList";

function Body({width}) {
  const classes = useStyles();
  console.log(width);
  return (
    <div className={classes.body}>
      <Hidden xsDown>
        <BodyDesk width={width} />
        {/* <SongList width={width} /> */}
      </Hidden>
      <Hidden smUp>
        <BodyMob width={width} />
        {/* <SongList width={width} /> */}
      </Hidden>
    </div>
  );
}

export default Body;

const useStyles = makeStyles({
  body: {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    overflowY: "hidden",
  },
});
