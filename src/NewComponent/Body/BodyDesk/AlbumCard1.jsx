import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function AlbumCard1({ img_link, album_name, artists_name, width }) {
  const screenWidth = width;
  const classes = useStyles({ screenWidth });
  console.log(width);
  return (
    <Card className={classes.newroot}>
      <CardActions className={classes.action}>
        <CardMedia
          component="img"
          alt={album_name}
          image={img_link}
          title={album_name}
          className={classes.media}
        />
        <Hidden smDown>
          <Avatar
            style={{
              backgroundColor: "#1DB954",
              margin: "-56px 0px 0px 140px",
              height: "45px",
              width: "45px",
            }}
          >
            <PlayArrowIcon color="secondary" style={{ fontSize: "30px" }} />
          </Avatar>
        </Hidden>
        <CardContent className={classes.content}>
          <Typography
            noWrap
            variant="body5"
            component="p"
            color="secondary"
            style={{
              fontSize: `${width === "xs" ? "14px" : "16px"}`,
              fontWeight: "bold",
            }}
          >
            {album_name} ahdbadbia adiadghad adgaodha
          </Typography>
          <Hidden xsDown>
            <Typography
              noWrap
              variant="subtitle1"
              component="p"
              color="primary"
            >
              {artists_name} ahdbadbia adiadghad adgaodha
            </Typography>
          </Hidden>
        </CardContent>
      </CardActions>
    </Card>
  );
}

export default AlbumCard1;

const useStyles = makeStyles({
  newroot: {
    background: "#181818",
    margin: "16px",
    overflow: "visible",
    width: "100%",
  },
  action: {
    padding: ({ screenWidth }) => (screenWidth === "xs" ? "0px" : "20px"),
    background: "transparent",
    display: "grid",
    // width: "100px",
    "& .MuiCardContent-root": {
      margin: 0,
      // width: "192px",
      width: ({ screenWidth }) =>
        screenWidth === "sm" || screenWidth === "xs" ? "108px" : "192px",
      color: "#fff",
      padding: 0,
    },
    media: {
      height: ({ screenWidth }) =>
        screenWidth === "sm" || screenWidth === "xs" ? "108px" : "192px",
      width: ({ screenWidth }) =>
        screenWidth === "sm" || screenWidth === "xs" ? "108px" : "192px",
      objectFit: "cover",
      margin: "0 0 12px 0",
      boxShadow: "0px 0px 32px 8px #000",
    },
    "& .MuiAvatar-root": {
      "& :hover": {
        transition: "0.1s transform  ease-in",
        transform: "scale(1.05) !important",
      },
    },
  },
});
