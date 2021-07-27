import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import { LoginFormMolecule } from "../../molecules";
import PersonIcon from "@material-ui/icons/Person";

export function LoginTemplate({ handleLogin }) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid container className={classes.root_login}>
        <Grid container className={classes.rootShadow}>
          <Paper item className={classes.margin_login} elevation={0} />
          <Paper className={classes.paper_right} elevation={0}>
            <Grid
              item
              component={Paper}
              elevation={6}
              square
              className={classes.loginDailog}
            >
              {" "}
              <div className={classes.avatarBack}>
                <Avatar className={classes.avatar}>
                  <PersonIcon className={classes.avatarIcon} />
                </Avatar>
              </div>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="h5">Get Statred</Typography>
                <LoginFormMolecule
                  classes={classes}
                  handleLogin={handleLogin}
                />
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
