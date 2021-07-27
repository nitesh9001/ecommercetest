import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { revokeToken } from "../../../redux/actions";
import { couponicon } from "../../../assets/index";

export function CouponHeader({ classes }) {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const handleLogoutClick = () => {
    dispatch(revokeToken());
    localStorage.clear();
    history.push("/");
  };
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  return (
    <Grid
      container
      spacing={1}
      xs={11}
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h6" className={classes.headingTbale}>
        COUPONS{" "}
        <img
          src={couponicon}
          alt=""
          style={{
            Width: "20px",
            height: "30px",
            top: "5px",
            right: "-40px ",
            position: "absolute",
          }}
        />
      </Typography>
      <Grid
        container
        direction="row"
        spacing={1}
        xs={12}
        justify="space-between"
        alignItems="center"
        className={classes.root_in_table}
      >
        <Grid
          item
          direction="row"
          spacing={1}
          justify="space-between"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.search_btn_in_list}
          >
            Offers On Product
          </Button>

          <Button
            variant="contained"
            style={{ background: "white" }}
            className={classes.search_btn_in_list}
          >
            Payment Offers / Coupons
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
