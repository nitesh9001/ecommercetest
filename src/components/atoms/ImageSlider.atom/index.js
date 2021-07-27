import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import { Gun1, Gun2, Gun3, Gun4 } from "../../../assets/index.js";

export default function ImageSlider() {
  //   useEffect(() => {
  //     const setResponsiveness = () => {
  //       return window.innerWidth < 600 ? setState(1) : setState(3);
  //     };
  //     setResponsiveness();
  //     window.addEventListener("resize", () => setResponsiveness());
  //     return () => {
  //       window.removeEventListener("resize", () => setResponsiveness());
  //     };
  //   }, []);

  return (
    <Grid container direction="row" xs={6}>
      <Grid
        container
        direction="row"
        spacing={1}
        xs={10}
        direction="row"
        justify="space-between"
      >
        <Carousel itemsToShow={1} pagination={false} className="rec-arrow">
          <Grid item>
            <img src={Gun4} />
          </Grid>
          <Grid item>
            <img src={Gun4} />
          </Grid>
          <Grid item>
            <img src={Gun4} />
          </Grid>
        </Carousel>
      </Grid>
    </Grid>
  );
}
