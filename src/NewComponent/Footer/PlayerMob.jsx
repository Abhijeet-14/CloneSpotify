import React from "react";
import {  makeStyles, Typography } from "@material-ui/core";
// Icons
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";

function PlayerMob() {
  const classes = useStyles();
  const [state, setState] = React.useState(true);
  return (
    <div
      className="container-fluid m-0 p-0 h-100"
      style={{ backgroundColor: "#282828", borderBottom: "2.5px solid #000" }}
    >
      <div className="row m-0 p-0 ">
        <div className="col container-fluid m-0 p-0">
          <div className="row m-0 p-0 align-items-center">
            <div className="col-3 m-0 p-0 py-1 text-center">
              <img
                src="https://picsum.photos/id/249/200/300"
                alt="Logo White"
                width="64px"
                height="64px"
                style={{
                  objectFit: "cover",
                  border: "2px solid red",
                  boxShadow: "0px 0px 6px 1.5px #000",
                }}
              />
            </div>
            <div className="col m-0 p-0 ">
              <div className="row m-0 p-0 align-items-center justify-content-center">
                <div className="col-2 m-0 p-0  text-center">
                  <SpeakerGroupIcon fontSize="default" color="primary" className={classes.icons} />
                </div>
                <div
                  className="col m-0 p-0 text-center"
                  style={{ width: "30px" }}
                >
                  <Typography
                    noWrap
                    variant="h6"
                    component="div"
                    color="primary"
                  >
                    SONG NAME
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    color="primary"
                    noWrap
                  >
                    ARTIST NAME
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-3 container-fluid m-0 p-0 "
          onClick={() => setState(!state)}
        >
          <div className="row m-0 p-0 h-100  align-items-center justify-content-center">
            <div className=" m-0 mr-2 p-0 text-center ">
              {state ? (
                <FavoriteIcon fontSize="default" style={{ color: "#1DB954" }} />
              ) : (
                <FavoriteBorderIcon fontSize="default" color="secondary" />
              )}
            </div>
            <div className=" m-0 p-0 text-center ">
              {state ? (
                <PauseIcon fontSize="large" color="primary" />
              ) : (
                <PlayArrowIcon fontSize="large" color="primary" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerMob;

const useStyles = makeStyles({
  root: {},
  text: {
    color: "primary",
  },
  icons: {
    "&:hover, &$active, &:focus": {
      color: "#1DB954",
    },
  },
});
