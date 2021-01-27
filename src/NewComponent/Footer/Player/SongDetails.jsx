import React from "react";
import { Avatar, Typography } from "@material-ui/core";

// Player left
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const SongDetails = () => {
  const [state, setState] = React.useState(true);
  return (
    <div className="container-fluid m-0 p-0 ">
      <div className="row m-0 p-0 align-items-center ">
        <div className="col-3 m-0 p-1 align-items-center  ">
          <Avatar
            variant="square"
            style={{
              backgroundColor: "#282828",
              width: "100%",
              height: "100%",
            }}
            className="text-center"
          >
            <img
              src="https://picsum.photos/id/249/200/300"
              alt="Logo Black"
              width="56px"
              height="56px"
              style={{ objectFit: "cover", boxShadow: "1px 1px 4px 1px #000" }}
            />
          </Avatar>
        </div>
        <div
          className="col m-0 p-0"
          style={{
            overflow: "hidden",
            minWidth: "140px",
            margin: 0,
            padding: 0,
          }}
        >
          <Typography noWrap variant="subtitle1" color="secondary">
            Song Name Song Name
          </Typography>
          <Typography noWrap variant="subtitle2" color="primary">
            Artists Name Artists Name Artists Name Artists Name
          </Typography>
        </div>
        <div
          className="col-2 m-0 p-0 text-center "
          onClick={() => setState(!state)}
        >
          {state && (
            <FavoriteIcon
              fontSize="small"
              style={{ color: "#1DB954" }}
            />
          )}
          {!state && <FavoriteBorderIcon fontSize="small" color="primary" />}
        </div>
      </div>
    </div>
    // <Grid
    //   container
    //   spacing={0}
    //   direction="row"
    //   alignItems="center"
    //   justify="space-between"
    //   className=""
    // >
    //   <Grid item>
    //     <Avatar
    //       variant="square"
    //       style={{
    //         // boxShadow: "0px 0px 4px 5px #123",
    //         backgroundColor: "white",
    //         width: "100%",
    //         margin: 0,
    //         padding: 0,
    //       }}
    //     >
    //       <img
    //         src="https://picsum.photos/id/249/200/300"
    //         alt="Logo Black"
    //         width="56px"
    //         style={{ objectFit: "cover",  }}
    //       />
    //     </Avatar>
    //   </Grid>
    //   <Grid
    //     item
    //     container
    //     direction="column"
    //     justify="center"
    //     style={{
    //       overflow: "hidden",
    //       width: "140px",
    //       backgroundColor: "red",
    //       margin: 0,
    //       padding: 0,
    //     }}
    //   >
    //     <Grid item xs zeroMinWidth>
    //       <Typography noWrap variant="subtitle1">
    //         Song Name Song Name Song Name Song Name
    //       </Typography>
    //     </Grid>
    //     <Grid item xs>
    //       <Typography noWrap variant="subtitle2">
    //         Artists Name Artists Name Artists Name
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid item className="bg-primary" onClick={() => setState(!state)}>
    //     {state && (
    //       <FavoriteIcon
    //         fontSize="small"
    //         // color="secondary"
    //         style={{ color: "white" }}
    //       />
    //     )}
    //     {!state && <FavoriteBorderIcon fontSize="small" color="secondary" />}
    //   </Grid>
    // </Grid>
  );
};

// const SongDetails = () => {
//   return (
//    <h2> Jellp </h2>
//   );
// };

export default SongDetails;
