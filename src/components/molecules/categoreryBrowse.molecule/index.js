import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Dialog,
  DialogTitle,
  useTheme,
  Typography,
  DialogContent,
  DialogContentText,
  Divider,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "1000px",
    height: "650px",
    marginTop: "9%",
    marginLeft: "5%",
    padding: "0px",
    zoom: "0.9",
    "@media (min-width: 1800px)": {
      padding: "0",
      zoom: "1",
      marginTop: "5%",
      height: "650px",
    },
    "@media (max-width: 960px)": {
      padding: "0",
      zoom: ".7",
      marginTop: "5%",
      height: "650px",
    },
    "@media (max-width: 770px)": {
      zoom: "1",
      height: "550px",
      width: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    "@media (max-width: 425px)": {
      marginLeft: "-2%",
    },
  },
  root_inner: {
    width: "100%",
    height: "auto",
    background: "white",
    overflowX: "hidden",
    padding: "10px",
  },
  root_flex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    "@media (max-width: 770px)": {
      flexWrap: "nowrap",
      flexDirection: "column",
    },
  },
  root_flex_in: {
    width: "320px",
    padding: "10px",
    "@media (max-width: 770px)": {
      width: "350px",
    },
    "@media (max-width: 425px)": {
      width: "260px",
    },
  },
  typoheading: {
    color: "#b79d5c",
  },
  bold_heading: {
    color: "black",
    fontWeight: "bolder",
    padding: "0px",
    margin: "0px",
  },
  root_inner_pading: {
    padding: "0",
  },
}));

export function CategoryBrowse({ onClose, selectedValue, open }) {
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      //   fullScreen={fullScreen}
      scroll="paper"
      className={classes.root}
    >
      <DialogContent className={classes.root_inner}>
        <DialogContentText className={classes.root_inner_pading}>
          <Grid className={classes.root_flex} container direction="row">
            <Grid
              className={classes.root_flex_in}
              style={{ background: "rgba(202,181,128,.5)" }}
            >
              <Typography variant="h6" className={classes.typoheading}>
                Guns & Firearms
              </Typography>
              <ListItem>
                <ListItemText
                  className={classes.bold_heading}
                  primary="All Guns & Firearms"
                />
              </ListItem>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Pistols"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="All Pistols"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Revolvers"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Semi Auto Pistols"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Single Shot Pistols"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Other Pistols"
                  />
                </ListItem>
              </List>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="All Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Bolt Action Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Lever Action Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pump Action Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Semi Shot Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Single Shot Rifles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Others Rifles"
                  />
                </ListItem>
              </List>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="All Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Bolt Action Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Lever Action Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pump Action Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Semi Shot Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Single Shot Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Side by side Shotguns"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Others Rifles"
                  />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="h6" className={classes.typoheading}>
                Ammunition Reloading
              </Typography>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="All Ammunition Reloading"
                  />
                </ListItem>
              </List>
              <List component="nav" aria-label="contacts"></List>
              <ListItem>
                <ListItemText
                  className={classes.bold_heading}
                  primary="Reloading Equipment"
                />
              </ListItem>
            </Grid>
            <Grid className={classes.root_flex_in}>
              <Typography variant="h6" className={classes.typoheading}>
                Guns Parts
              </Typography>
              <ListItem>
                <ListItemText
                  className={classes.bold_heading}
                  primary="All Guns Parts"
                />
              </ListItem>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Pistol Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="All Pistols Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pistols Barrels"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pistols Frames"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pistols Grips"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pistols Magzazines & Clips"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Pistols Slides"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Small Pistols Parts"
                  />
                </ListItem>{" "}
                <ListItem>
                  <ListItemText
                    inset
                    primary="Other Pistols Accessories & Parts"
                  />
                </ListItem>{" "}
              </List>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Rifles Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="All Rifles Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Rifles Barrels"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Rifles Bolts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Rifles Lowers"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Rifles Magazines & Clips"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Rifles Stocks"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    onClick={handleListItemClick}
                    primary="Small Rifles Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    inset
                    primary="Others Rifles Accessories & Parts"
                  />
                </ListItem>
              </List>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Shotguns Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="1911 Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="AK47 Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="AR15 Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Glock Parts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Gun Parts Kit"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.bold_heading}
                    primary="Weapon Lights"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid
              className={classes.root_flex_in}
              style={{ background: "rgba(202,181,128,.5)" }}
            >
              <Typography variant="h6" className={classes.typoheading}>
                Scopes, Sights & Optics
              </Typography>
              <List component="nav" aria-label="contacts">
                <List component="nav" aria-label="contacts">
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="All Scopes & Optics"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Binoculars"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Gun Scopes"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Gun Sights"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Lazer Sights"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Night Vision"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Spotted Scopes"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Red Dot Sights"
                    />
                  </ListItem>
                </List>
              </List>
              <Divider />
              <Typography variant="h6" className={classes.typoheading}>
                Holsters & Gun Leather
              </Typography>
              <Divider />

              <Typography variant="h6" className={classes.typoheading}>
                Black Powder & Muzzleloaders
              </Typography>
              <List component="nav" aria-label="contacts">
                <List component="nav" aria-label="contacts">
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="All Black Powder & Muzzleloaders"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Bullets"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Pistols & Muzzleloaders Pistols"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Rifles & Muzzleloaders Rifles"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Muzzleloaders Suppliers & Black Powder Parts"
                    />
                  </ListItem>
                </List>
              </List>
              <Divider />
              <Typography variant="h6" className={classes.typoheading}>
                Holsters & Gun Leather
              </Typography>

              <List component="nav" aria-label="contacts">
                <List component="nav" aria-label="contacts">
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="All Black Powder & Muzzleloaders"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Bullets"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Pistols & Muzzleloaders Pistols"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Black Powder Rifles & Muzzleloaders Rifles"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.bold_heading}
                      primary="Muzzleloaders Suppliers & Black Powder Parts"
                    />
                  </ListItem>
                </List>
              </List>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
