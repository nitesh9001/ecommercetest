import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { NavLink } from "react-router-dom";

export function Pagination({ classes }) {
  return (
    <Grid
      container
      spacing={1}
      xs={10}
      alignItems="center"
      className={classes.root}
    >
      <Grid
        direction="row"
        spacing={1}
        justify="space-around"
        alignItems="center"
        className={classes.root_inner_pagination}
      >
        <Grid>
          <Typography>Page 1 of 40</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.count_page}
        >
          <NavLink
            to="/products"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper
              className={classes.navlink_paper}
              elevation={0}
              style={{ background: "#b79d5c" }}
            >
              1
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              2
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              3
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              4
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              5
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              6
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              7
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              8
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              9
            </Paper>
          </NavLink>
          <NavLink
            to="/"
            className={classes.navlink_pageination}
            activeClassName={classes.active_page}
          >
            <Paper className={classes.navlink_paper} elevation={0}>
              10
            </Paper>
          </NavLink>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="white"
            style={{ background: "white" }}
          >
            Next <ArrowRightIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
