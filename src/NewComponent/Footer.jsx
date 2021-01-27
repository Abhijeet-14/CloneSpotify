import React from "react";
import { Grid, Hidden } from "@material-ui/core";

import BottomHeader from "./Footer/BottomHeader";
import Player from "./Footer/Player";

export default function Footer({width}) {
  return (
    <Grid
      container
      direction="column"
      // alignItems="flex-end"
      justify="flex-end"
      spacing={0}
      className="bg-dark p-0 m-0 fixed-bottom"
      style={{ felxGrow: 1 }} // margin: "20px 12px 20px 12px" }}
    >
      {/* <Grid
        item
        style={{
          backgroundColor: "green",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
    </Grid> */}
      <Player width={width} />
      <Grid item style={{ backgroundColor: "#282828", padding: 0, margin: 0 }}>
        <Hidden smUp>
          <BottomHeader />
        </Hidden>
      </Grid>
    </Grid>
  );
}
