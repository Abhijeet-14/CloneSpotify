import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  withWidth,
} from "@material-ui/core";
// COMPONENTS
import SideBar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function MyComponents(props) {
  const classes = useStyles();
  return (
    <Box m={0} className="min-vh-100 m-0 p-0">
      <Container className={classes.root} maxWidth="xl">
        <Grid container direction="row">
          <Grid item lg={2} md={2} sm={3} className="h-100">
            <SideBar width={props.width} />
          </Grid>
          <Grid item sm className="h-100 p-sm-3 body">
            <Body width={props.width} />
          </Grid>
        </Grid>
        <Footer width={props.width} />
      </Container>
      <CssBaseline />
    </Box>
  );
}

export default withWidth()(MyComponents);

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    padding: 0,
    margin: "0",
    // backgroundColor: "#121212",
    backgroundColor: "#121212",
    "& .body": {
      overscrollBehaviorY: "none",
      overflow: "hidden",
    },
  },
});
