import React from "react";
import { Grid, Paper } from "@material-ui/core";

export function Slider({ classes }) {
  return (
    <Grid container xs={12} className={classes.root}>
      <img
        src="https://skelia.com/wp-content/uploads/2018/10/Testing-types-explained-01.png"
        width="100%"
        alt=""
      />
    </Grid>
  );
}
