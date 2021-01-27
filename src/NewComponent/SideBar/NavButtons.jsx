import React from 'react'
import { Grid, IconButton, makeStyles } from '@material-ui/core';
// Components
import ButtonIcon from '../ButtonIcon';
// ICONS
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import SpotifyLibrary from '../_icons/SpotifyLibraryIcon';

const buttonsDetails = [
  {
    icon: <HomeIcon fontSize="medium" color="inherit" />,
    label: "Home",
    flex: "row",
    badgeValue: 0,
    space: 1,
    align: "flex-end",
    typoVariant: "subtitle1",
  },
  {
    icon: <SearchIcon fontSize="medium" color="inherit" />,
    label: "Search",
    flex: "row",
    badgeValue: 0,
    space: 1,
    align: "flex-end",
    typoVariant: "subtitle1",
  },
  {
    icon: <SpotifyLibrary />,
    label: "Your Library",
    flex: "row",
    badgeValue: 0,
    space: 1,
    align: "flex-end",
    typoVariant: "subtitle1",
  },
];

function Nav() {
    const classes = useStyles();
    return (
        buttonsDetails.map((item, index) => (
          <Grid item key={index} className={classes.buttons}>
            <IconButton style={{ width: "100%", height: "50px" }}>
              <ButtonIcon {...item} />
            </IconButton>
          </Grid>
        ))
    )
}

export default Nav;


const useStyles = makeStyles({
  buttons: {
    margin: "0px 32px 0px 8px",
    padding: "0px",
    "& .MuiTypography-root": {
      color: "#B3B3B3",
    },
    "& .MuiSvgIcon-root": {
      color: "#B3B3B3",
    },
    "&:hover": {
      backgroundColor: "#282828",
      borderRadius: "6px",
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
    "& .MuiIconButton-root": {
      padding: "4px",
    },
    "& .MuiIconButton-label": {
      padding: "0 0 2px 12px",
    },
  },
});




