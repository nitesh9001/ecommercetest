import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Image4, Image6 } from "../../../assets";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex_copyright: {
    width: "97.5%",
    margin: "0px auto",
    padding: "10px 15px",
    display: "flex",
    flexDirection: "row",
    background: "#5A5A5A",
    justifyContent: "space-between",
  },
  typ_botom: {
    color: "white",
    fontFamily: "poppins",
  },
  img_flex_copyright: {
    margin: "0px 6px",
    width: "40px",
  },
}));

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://example.com/">
        Guns.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function CopyrightDash() {
  const classes = useStyles();

  return (
    <Grid className={classes.flex_copyright}>
      <Grid className={classes.left_flex_copyright}>
        <Typography
          variant="body2"
          align="center"
          className={classes.typ_botom}
        >
          {"Copyright "}
          {new Date().getFullYear()}
          <Link color="inherit" href="https://example.com/">
            Guns.com
          </Link>{" "}
          {"."}
          {"All rights reserved"}
        </Typography>
      </Grid>
      <Grid className={classes.right_flex_copyright}>
        <img alt="" src={Image4} className={classes.img_flex_copyright} />
        <img alt="" src={Image6} className={classes.img_flex_copyright} />
      </Grid>
    </Grid>
  );
}
