import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Grid,
  NativeSelect,
  InputBase,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { revokeToken } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { DashboardHeader } from "../DashboardHeader.molecule";
import { MenuHeader } from "../MenuHeader.molecule";
import { TopHeader } from "../../atoms";
import { CategoryBrowse } from "../categoreryBrowse.molecule";

const headersData = [
  {
    label: "Log Out",
    href: "/",
    key: "logout",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary,
    width: "100%",
    boxShadow: "-4px 0px 3px grey",
    margin: "0 auto",
    paddingBottom: "5px",
    position: "absolute",
    "@media (max-width: 1005px)": {
      padding: "0",
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    // marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 1005px)": {
      margin: "0px auto",
      width: "300px",
    },
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    float: "right",
    right: "20px",
    fontSize: "45px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  searchConatiner: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    margin: "10px auto",
    "@media (max-width: 700px)": {
      margin: "10px auto",
      width: "80%",
    },
  },
  searchBox: {
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    background: "#ffffff",
    boxShadow: "3px 3px 6px #00000029",
    border: "1px solid #DEDEDE",
    opacity: 1,
    margin: "0 10px",
  },
}));

export function Header({ classes }) {
  const customstyle = useStyles();
  const token = useSelector((state) => state.auth.token);
  const { header, logo, menuButton, toolbar, drawerContainer, closeButton } =
    useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1010
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <DashboardHeader classes={classes} />
        <MenuHeader classes={classes} openDailog={handleClickOpen} />
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <CloseIcon
            color="secondary"
            className={closeButton}
            onClick={handleDrawerClose}
          />
          <DashboardHeader classes={classes} />
          <MenuHeader classes={classes} openDailog={handleClickOpen} />
        </Drawer>
        <div>{GunBigLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, key }) => {
      let linkProps = {
        component: RouterLink,
        to: href,
        color: "inherit",
        style: { textDecoration: "none" },
        key: key,
      };
      if (key === "logout") {
        delete linkProps.to;
        linkProps.onClick = () => handleLogout();
      }
      return (
        <Link {...linkProps}>
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const GunBigLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      GunBig
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, key }) => {
      let linkProps = {
        key: key,
        color: "inherit",
        to: href,
        component: RouterLink,
        className: menuButton,
      };
      if (key === "logout") {
        delete linkProps.to;
        linkProps.onClick = () => handleLogout();
      }
      return <Button {...linkProps}>{label}</Button>;
    });
  };

  const handleLogout = () => {
    dispatch(revokeToken());
  };
  return (
    <>
      <header className={header}>
        <TopHeader classes={classes} />
        <div>{mobileView ? displayMobile() : displayDesktop()}</div>
        {mobileView ? (
          <Grid item xs={12} className={customstyle.searchConatiner}>
            <Grid container className={customstyle.searchBox}>
              <Grid item xs={8}>
                <div className={classes.search}>
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
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className={classes.search_btn_in}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </header>
      <CategoryBrowse open={open} onClose={handleClose} />
    </>
  );
}
