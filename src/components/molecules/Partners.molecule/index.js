import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import {
  Partner1,
  Partner2,
  two,
  three,
  Image20,
  Partner4,
} from "../../../assets";
// import { Layout, TopHeader } from '../../atoms';

export function Partners({ classes }) {
  return (
    <Grid container direction="row" xs={12} className={classes.partnersBox}>
      {/* <Grid className={classes.listTitle} item xs={12}>
                <Typography variant="h6">Partners</Typography>
            </Grid>
            <Grid className={classes.listTitle} item xs={12}>
                <Paper variant="outlined" />
                <Paper variant="outlined" />
                <Paper variant="outlined" />
            </Grid> */}
      <Grid container direction="row" justify="center" xs={12}>
        <Grid item>
          <Typography className={classes.partnerCardTitle} variant="h5">
            Partners
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={2}
        className={classes.partnerCards}
      >
        <Grid className={classes.partnerCard} item>
          <img src={two} height="100%" width="100%" alt="" />
        </Grid>
        <Grid className={classes.partnerCard} item>
          <img src={three} height="100%" width="100%" alt="" />
        </Grid>
        <Grid className={classes.partnerCard} item>
          <img src={Image20} height="100%" width="100%" alt="" />
        </Grid>
        <Grid className={classes.partnerCard} item>
          <img src={two} height="100%" width="100%" alt="" />
        </Grid>
        <Grid className={classes.partnerCard} item>
          <img src={three} height="100%" width="100%" alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
}
