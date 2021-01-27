import React from "react";
import { AppBar, Badge, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// COMPONENTS
import ButtonIcon from "../ButtonIcon";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import PersonIcon from "@material-ui/icons/Person";
import SpotifyLibraryIcon from "../_icons/SpotifyLibraryIcon";

const bottomHeaderIcons = [
  {
    icon: <HomeIcon fontSize="medium" color="primary" />,
    label: "Home",
    flex: "column",
    badgeValue: 0,
  },
  {
    icon: <SearchIcon fontSize="medium" color="primary" />,
    label: "Search",
    flex: "column",
    badgeValue: 0,
  },
  {
    icon: <SpotifyLibraryIcon />,
    label: "Your Library",
    flex: "column",
    badgeValue: 0,
  },
  {
    icon: <PersonIcon fontSize="medium" color="primary" />,
    label: "Account",
    flex: "column",
    badgeValue: 4,
  },
];

export default function BottomHeader() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2.5}
      justify="space-around"
      className={classes.root}
    >
      {bottomHeaderIcons.map((item, index) => (
        <Grid item key={index} className={classes.buttons}>
          <IconButton >
            <ButtonIcon {...item} />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#282828",
    overflow: "hidden",
  },
  buttons: {
    "& .spotifyLibraryIcon": {
      color: "#B3B3B3",
    },
    "& .MuiIconButton-root": {
      fontSize: 0,
    },
    "&:hover": {
      backgroundColor: "#494949",
      borderRadius: "3px",
      "& .MuiTypography-root": {
        color: "#fff",
      },
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
      "& .spotifyLibraryIcon": {
        color: "#fff",
      },
    },
  },
});
