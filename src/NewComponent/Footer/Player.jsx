import React from "react";
import { Hidden, } from "@material-ui/core";
import PlayerDesk from "./PlayerDesk";
import PlayerMob from "./PlayerMob";

export default function Player({width}) {

  return (
    <>
      <Hidden xsDown>
        <PlayerDesk width={width}/>
      </Hidden>
      <Hidden smUp>
        <PlayerMob />
      </Hidden>
    </>
  );
}

