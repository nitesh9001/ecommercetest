import React, { useEffect, useState } from "react";
import {
  Grid,
  InputBase,
  Button,
  NativeSelect,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { revokeToken } from "../../../redux/actions";

export function DashboardHeader({ classes }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const handleLogoutClick = () => {
    dispatch(revokeToken());
    localStorage.clear();
    history.push("/");
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

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
      item
      container
      direction="row"
      spacing={1}
      xs={12}
      justify="space-between"
      alignItems="center"
      className={classes.root_maintop}
    >
      <Grid item xs={2} className={classes.logo}>
        <Typography className={classes.logoText} variant="h3">
          GUNS
        </Typography>
        {/* <img src="https://banner2.cleanpng.com/20180131/kie/kisspng-abstract-art-abstract-colors-transparent-background-5a71dfd9be30e4.7034539215174123137791.jpg" height="50" width="100" /> */}
      </Grid>
      {!state.mobileView ? (
        <>
          <Grid item>
            <Grid container className={classes.searchBox}>
              <Grid item xs={8}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
              <Grid item xs={4} className={classes.selectCategories}>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={10}
                  disableUnderline={true}
                >
                  <option value="all_categories">All Categories</option>
                  <option value="test1">Test1</option>
                  <option value="test2">Test1</option>
                  <option value="test3">Test1</option>
                </NativeSelect>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.search_btn}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.search_btn_in}
            >
              Search
            </Button>
          </Grid>
          <Grid item className={classes.regsiter_btn_border}>
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
        </>
      ) : (
        ""
      )}
    </Grid>
  );
}
