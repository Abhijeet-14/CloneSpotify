import { makeStyles } from "@material-ui/core";
import React from "react";

export default function SpotifyLibraryIcon({width=24, height=24}) {
  const classes = useStyles();
  return (
    <div style={{ color: "#B3B3B3", margin: 0, padding: "0 0 2px 0px" }}>
      <svg
        viewBox="0 0 512 512"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        // className="spotifyLibraryIcon"
      >
        <path
          d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
          fill="currentColor"
          className="spotifyLibraryIcon"
        ></path>
      </svg>
    </div>
  );
}

const useStyles = makeStyles({
  "& .spotifyLibraryIcon": {
    color: "#B3B3B3",
    "&:hover": {
      color: "#fff",
    },
  },
});
