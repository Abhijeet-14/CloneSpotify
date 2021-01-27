import React from "react";
import TimerRounded from "@material-ui/icons/TimerRounded";
import { makeStyles, Typography, } from "@material-ui/core";

const link =
  "https://dailymix-images.scdn.co/v2/img/4df9740f3f6bfcc28e9c8c57ecf4c7eda4a2e42b/4/en/default";

function SongList({width}) {
    const screenWidth = width;
  const classes = useStyles({screenWidth});
  return (
    <div className={classes.songListContainer}>
      <img src={link} alt="thimb" width="56px" />
      <Typography
        noWrap
        variant="subtitle1"
        component="p"
        color="secondary"
        style={{ fontSize: "16px" }}
      >
        Meri Tum Ho (Unplugged) Meri Tum Ho (Unplugged)
      </Typography>
      <Typography noWrap variant="subtitle2" component="p" color="primary">
        Pritam, Jubin Nautiyal, Ash King
      </Typography>
      <TimerRounded color="primary" />
    </div>
  );
}

export default SongList;

const useStyles = makeStyles({
  songListContainer: {
    width: ({screenWidth}) => screenWidth === 'xs' ? "100vw": "100%",
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "1fr",
    backgroundColor: "red",
    color: "#fff",
  },
});

// <div
//   className="container-fluid p-2 bg-danger -100"
//   style={{
//     scrollBehavior: "smooth",
//     overflowY: "auto",
//     height: "100vh",
//     "& ::-webkit-scrollbar": {
//       width: "0px" /* Remove scrollbar space */,
//       background:
//         "transparent" /* Optional: just make scrollbar invisible */,
//     },
//   }}
// >
//   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map(() => (
//     <>
//       <img src={link} alt="thimb" width="56px" />
//       <div className="container-fluid m-0 p-0 bg-succes">
//         <div className="row m-0 p-0" style={{ width: "130px" }}>
//           <Typography
//             noWrap
//             variant="subtitle1"
//             component="p"
//             color="secondary"
//             style={{ fontSize: "16px" }}
//           >
//             Meri Tum Ho (Unplugged) Meri Tum Ho (Unplugged)
//           </Typography>
//           <Typography
//             noWrap
//             variant="subtitle2"
//             component="p"
//             color="primary"
//           >
//             Pritam, Jubin Nautiyal, Ash King
//           </Typography>
//         </div>
//       </div>
//     </>
//   ))}
// </div>
