import { Grid } from "@material-ui/core";
import React from "react";
import {Send} from '../../../assets';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input_box_container: {
    maxWidth: "300px",
    marginLeft: "15px",
  },
  grid_input_section: {
    background: "white",
    display: "flex",
    flexDirection: "row",
    borderRadius: "10px",
    margin: "20px auto",
    boxShadow: "0 1px 2px grey",
    padding: " 0 5px",
    height: "40px",
  },
  grid_input: {
    width: "90%",
  },
  input_box: {
    width: "100%",
    border: "none",
    height: "40px",
    outline: "none",
    background: "transparent",
  },
  grid_input_icon: {
    background: "#5A5A5A",
    margin: "5px 0",
    height: "30px",
    width: "35px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  grid_input_icon_img: {
    height: "20px",
    width: "20px",
    display: "flex",
    margin: "6px 5px",
    justifyContent: "center",
  },
}));

export default function TextFeildInput() {
  const classes = useStyles();
  return (
    <div className={classes.input_box_container}>
      <Grid className={classes.grid_input_section}>
        <Grid className={classes.grid_input}>
          <input
            className={classes.input_box}
            placeholder="Enter Email"
            type="text"
          />
        </Grid>
        <Grid className={classes.grid_input_icon}>
          <img alt="" src={Send} className={classes.grid_input_icon_img} />
        </Grid>
      </Grid>
    </div>
  );
}
