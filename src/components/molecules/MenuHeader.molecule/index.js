import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { revokeToken } from "../../../redux/actions";

export function MenuHeader({ classes, openDailog }) {
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
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid
      container
      direction="row"
      spacing={4}
      xs={12}
      justify="space-between"
      alignItems="center"
      className={classes.root_menuheader}
    >
      <Grid item>
        <Button
          className={classes.btnBrowseCategories}
          variant="outlined"
          color="secondary"
          onClick={openDailog}
        >
          <Typography variant="button">Browse Categories</Typography>
          <MenuIcon className={classes.iconMenu} />
        </Button>
      </Grid>
      <Grid
        className={classes.navigationMenu}
        container
        xs={7}
        spacing={state.mobileView ? 2 : 4}
      >
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/buy"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Buy
            </NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/sell"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Sell
            </NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/coupons"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Coupons
            </NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/deals"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Deals
            </NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/articals"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Articals
            </NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.btnMenuLink}>
            <NavLink
              to="/help"
              activeClassName={classes.activeLink}
              className={classes.btnMenuLink}
            >
              Help
            </NavLink>
          </Typography>
        </Grid>
        {state.mobileView ? (
          <Grid item>
            {!token ? (
              <Button
                className={classes.btnSignup}
                variant="contained"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                <PersonIcon />
                <Typography variant="button">Sign in / Register</Typography>
              </Button>
            ) : (
              <Button
                className={classes.btnSignup}
                variant="contained"
                onClick={handleLogoutClick}
              >
                <PersonIcon />
                <Typography variant="button">Logout</Typography>
              </Button>
            )}
          </Grid>
        ) : (
          "."
        )}
      </Grid>
    </Grid>
  );
}
