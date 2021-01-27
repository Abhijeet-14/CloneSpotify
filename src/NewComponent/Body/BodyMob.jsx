import React from "react";
import AlbumCard1 from "./BodyDesk/AlbumCard1";
import { GridList, makeStyles } from "@material-ui/core";

const links = [
  "https://dailymix-images.scdn.co/v2/img/4cbbbaea3e085f0d24dba3677b59dd6a4acec161/1/en/default",
  "https://dailymix-images.scdn.co/v2/img/4df9740f3f6bfcc28e9c8c57ecf4c7eda4a2e42b/4/en/default",
  "https://newjams-images.scdn.co/v3/discover-weekly/jwyS3zV-HwCVtCZTfwCsrzgq8lBw3S21ckYWNrsYzbmRUc1867Ub0kUrXPxsYwS8LmqpzESaw_4MLlgos5wRnBZgiO7f9YlPhsrljTkPsXg=/MTI6NjE6NzFUMDMtMTAtMQ==/default",
  "https://misc.scdn.co/liked-songs/liked-songs-640.png",
  "https://mosaic.scdn.co/640/ab67616d00001e02c3892ca852ece4a7fb1a3adaab67616d00001e02cccefb03aa38bcfe7b4bf37bab67616d00001e02d2c31c9a380fd2963bb7cac6ab67616d00001e02fd983cf401180805b92fb386",
  "https://i.scdn.co/image/ab67616d0000b273e7c61465b863bed7d6f7a2ba",
  "https://dailymix-images.scdn.co/v2/img/4cbbbaea3e085f0d24dba3677b59dd6a4acec161/1/en/default",
  "https://dailymix-images.scdn.co/v2/img/4df9740f3f6bfcc28e9c8c57ecf4c7eda4a2e42b/4/en/default",
];
function BodyDesk({ width }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {[1,2,3,4,5,6,7].map(()=> (<div
        // style={{
        //   overflow: "hidden",
        //   display: "flex",
        //   flexWrap: "wrap",
        // }}
        className={classes.cardRoot}
      >
        <GridList
          cols={5}
          // style={{ flexWrap: "nowrap", height: "100%", backgroundColor: "" }}
          className={classes.gridList}
        >
          {links.map((val, index) => (
            <AlbumCard1
              img_link={val}
              album_name="Album Name"
              artists_name="Artists Name"
              width={width}
            />
          ))}
        </GridList>
      </div>))}
    </div>
  );
}

export default BodyDesk;

const useStyles = makeStyles({
  root: {
    scrollBehavior: "smooth",
    overflow: "auto",
    height: "100vh",
    "&::-webkit-scrollbar": {
      width: "0px" /* Remove scrollbar space */,
      background: "transparent" /* Optional: just make scrollbar invisible */,
    },
  },
  cardRoot: {
    display: "flex",
    overflow: "hidden",
    flexWrap: "wrap",
    "& ::-webkit-scrollbar": {
      width: "1px",
      background: "transparent",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    height: "100%",
  },
});

// import AlbumCard1 from "./Body/BodyDesk/AlbumCard1";
// import { Avatar, Grid, makeStyles } from "@material-ui/core";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// function BodyMob() {
//   return (
//     <div>
//       <Grid item container fluid direction="row" spacing={0}>
//             {[{}, {}, {}, {}].map(() => (
//               <Grid
//                 itemj
//                 style={{
//                   backgroundColor: "red",
//                   // marginBottom: "10px",-
//                   padding: "0px",
//                 }}
//               >
//                 <SongImage />
//               </Grid>
//             ))}
//           </Grid>
//     </div>
//   );
// }

// export default BodyMob;

// function SongImage() {
//   const classes = useStyles();
//   return (
//     <Avatar variant="square" className={classes.SongImage}>
//       <FavoriteIcon fontSize="large" />
//     </Avatar>
//   );
// }

// const useStyles = makeStyles({
//   SongImage: {
//     background: "linear-gradient(135deg,#450af5,#c4efd9)",
//     width: "86px",
//     height: "86px",
//     margin: "0px",
//     padding: 0,
//   },
// });
