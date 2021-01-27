import React from "react";

// Requires for HEADER: 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SaveIcon from "@material-ui/icons/Save";

// FONT-FAMILY to the DOM.
import "fontsource-roboto";

// STYLE:
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(68deg, #FE6888, #FFBE53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

// THEME:
const theme = createMuiTheme({
  typography: {
    h3: {
      // this is child of typography with h3 element
      fontSize: 36,
      marginBottom: 10,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function CheckedboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          "aria-label": "Secondary Checkbox",
        }}
      />
      <p>To add labels, we can't do directly through Checkbox.</p>
      <p>
        We need to add other thing, FormLabelControler. And have many
        functionality i.e., Icons, Label
      </p>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            icon={<SaveIcon />}
            checkedIcon={<HomeIcon />}
            inputProps={{
              "aria-label": "Secondary Checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
      <br />
    </div>
  );
}

function MaterialUI() {
  return (
    // ThemeProvide is Context:... it changes according to primary & secondary.
    <ThemeProvider theme={theme}>
      <div className="bg-dark " style={{ marginTop: 65}}>
          <AppBar>
              <Toolbar>
                  <IconButton>
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h4">
                      MUI COMPONENTS
                  </Typography>
                  <Button variant="contained" color="secondary">Login </Button>
              </Toolbar>
          </AppBar>
        <Box component="h1" m={0} className="bg-warning">
          BOX
        </Box>
        {/* CONTAINER */}
        <Box className="bg-success">
          <Container fixed className="bg-danger">
            Container!! <br />
            - fluid : width by MAX_WIDTH of current VIEWPORT. <br />
            - fixed : fixed size, NOT the size of VIEWPORT, it will the
            MIN_WIDTH of current breakpoint <br />
            - maxWidth: 'lg', 'md', 'sm', 'xl', 'xs', false <br />
            if maxWidth = false, then it won't grow with size of the screen{" "}
            <br />
          </Container>
        </Box>
      </div>
      {/* BUTTON */}
      <div className="bg-warning">
        <Button
          startIcon={<HomeIcon />}
          endIcon={<SaveIcon />}
          size="large"
          variant="contained"
          color="primary"
          className="bg-succes"
        >
          HELLO BUTTON
        </Button>
        Button have various of properties.
      </div>
      <CheckedboxExample />
      <p>TextField</p>
      <TextField
        variant="outlined"
        label="Name"
        placeholder="Enter your Name"
      />
      <TextField variant="outlined" label="Time" type="time" />
      <TextField variant="outlined" type="date" />
      <p>Button Styled:</p>
      <ButtonStyled />
      <Typography variant="h3" component="div">
        This ia a Typography test.
      </Typography>
      <Typography variant="h5">This is a Typography test.</Typography>

      {/* CONTAINERS & GRID */}
      <div className="bg-danger m-0 p-0">
        <Container maxWidth="xs">
          <Grid container spacing={2} justify="center" className="bg-success">
            {/* Responsive Desgin - set values for xs, sm, lg etc. */}
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: "100%" }}>xs-3, sm-6</Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: "100%" }}>xs-3, sm-6</Paper>
            </Grid>
            <Grid item xs={3} lg={12}>
              <Paper style={{ height: 75, width: "100%" }}>xs-3, lg-12</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default MaterialUI;
