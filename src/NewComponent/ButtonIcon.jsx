import { Typography, Grid, Badge } from "@material-ui/core";
import React from "react";

export default function ButtonIcon({ label="", icon="", flex = "row", align="",badgeValue=0, space=0, typoVariant="subtitle2" }) {
  return !icon ? (
    <Typography variant="subtitle1" component="div">
      {label}
    </Typography>
  ) : (
    <Grid container spacing={space} direction={flex} alignItems={align}>
      <Grid item >
        <Badge badgeContent={badgeValue} color="secondary">
          {icon}
        </Badge>
      </Grid>
      <Grid item >
        <Typography
          variant={typoVariant}
          component="strong"
          color="primary"
        >
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
}
