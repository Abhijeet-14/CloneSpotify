import { Grid, makeStyles, Tabs, Typography } from '@material-ui/core';
import React from 'react'

const popularList = [
  { label: "Popular 1" },
  { label: "Popular 2 ABHIJEEEEEEEEEEt" },
  { label: "Popular 3 to the other thing" },
  { label: "Popular 4" },
  { label: "Popular 5" },
  { label: "Popular 3 to the other thing" },
  { label: "Popular 6" },
  { label: "Popular 7" },
  { label: "Popular 3 to the other thing" },
  { label: "Popular 8" },
  { label: "Popular 9" },
  { label: "Popular 3 to the other thing" },
];
function PopularPlaylist() {
    const classes = useStyles()
    return (
      <Grid item>
        <Grid
          container
          spacing={1}
          wrap="nowrap"
          direction="column"
          alignItems="flex-start"
          style={{ height: "130px", width: "90%", margin: 0 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="off"
            className=" mt-2 px-3"
            style={{ width: "90%" }}
          >
            {popularList.map((item, index) => (
              <Typography
                noWrap={true}
                variant="subtitle2"
                component="div"
                className={classes.tab}
                key={index}
              >
                {item.label}
              </Typography>
            ))}
          </Tabs>
        </Grid>
      </Grid>
    );
}

export default PopularPlaylist


const useStyles = makeStyles({
  tab: {
    color: "#B3B3B3",
    marginBottom: "12px",
    "&:hover": {
      color: "#fff",
    },
  },
});