import {
  Avatar,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
// Icons
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// Components
import LogoWhite from "../Shared/Spotify/LogoWhite.png";
import NavButtons from "./SideBar/NavButtons";
import NavPlaylists from "./SideBar/NavPlaylists";
import PopularPlaylist from "./SideBar/PopularPlaylist";

export default function Sidebar({width}) {
  const classes = useStyles();
  return (
    <Hidden xsDown>
      <Grid
        container
        direction="column"
        // justify="center"
        className={classes.root}
      >
        <Grid item style={{ padding: "24px 0px 12px 20px" }} >
          {LogoWhite ? (
            <img src={LogoWhite} alt="Spotify" width={`${width === "sm" ? "128px" : "152px"}`} height="100%" style={{objectFit: ""}}/>
          ) : (
            <h2>Spotify</h2>
          )}
        </Grid>
        <NavButtons />
        <NavPlaylists />
        <hr className={classes.horizontalLine} />
        <PopularPlaylist />
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          className="m-0 px-2"
        >
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "black",
                width: "26px",
                height: "26px",
                marginRight: "4px",
              }}
            >
              <ArrowDownwardIcon
                fontSize="small"
                style={{ color: "#B3B3B3" }}
              />
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap variant="subtitle2" color="primary">
              Install App
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  );
}

const useStyles = makeStyles({
  root: {
    // overscrollBehaviorY: "none",
    overflow: "hidden",
    backgroundColor: "black",
    height: "100vh",
    "& .spotifyLibrary": {
      color: "#B3B3B3",
    },
  },
  horizontalLine: {
    margin: "2px 38px 2px 8px",
    padding: 0,
    backgroundColor: "#B3B3B3",
    height: "1px",
    minWidth: "1px",
  },
});
