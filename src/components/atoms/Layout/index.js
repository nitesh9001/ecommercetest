import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Footer, Header } from "../../molecules";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root_inner: {
    fontFamily: "poppins",
  },
}));

export function Layout(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.root_inner}>
        <Grid container spacing={1}>
          <Header classes={props.classes} />
          {props.children}
          <Footer classes={props.classes} />
        </Grid>
      </Grid>
    </Grid>
  );
}
