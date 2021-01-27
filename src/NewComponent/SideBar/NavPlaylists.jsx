import React from "react";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";

function NavPlaylists() {
    const classes = useStyles();
  return (
    <Grid
      item
      spacing={1}
      container
      direction="column"
      className={classes.playlists}
    >
      <Grid item style={{ margin: "6px 0px 8px 4px" }}>
        <Typography color="primary">PLAYLISTS</Typography>
      </Grid>
      <Grid item>
        {[
          {
            icon: <AddIcon fontSize="medium" />,
            label: "Create Playlists",
            avatarVariant: "square",
            background: "primary",
          },
          {
            icon: <FavoriteIcon fontSize="small" />,
            label: "Liked Songs",
            avatarVariant: "square",
            background: "linear-gradient(135deg,#450af5,#c4efd9)",
          },
        ].map((item) => (
          <Paper className={classes.paper}>
            <Grid
              container
              wrap="nowrap"
              spacing={1}
              alignItems="center"
              style={{ cursor: "pointer", width: "100%" }}
              onClick={() => console.log("Clicked!")}
            >
              <Grid item>
                <Avatar
                  variant={item.avatarVariant}
                  style={{
                    background: item.background,
                    width: "36px",
                    height: "36px",
                  }}
                  color="primary"
                >
                  {item.icon}
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap color="secondary">
                  {item.label}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
}

export default NavPlaylists;

const useStyles = makeStyles({
  paper: {
    maxWidth: "100%",
    margin: "4px 24px 6px 8px",
    backgroundColor: "black",
  },
  playlists: {
    // color: "secondary",
    margin: "0px 8px",
  },
});