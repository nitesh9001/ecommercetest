import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import { Fb, Insta, Twitte } from "../../../assets";

import { CopyrightDash } from "../../atoms/Copyright.atom";
import React from "react";
import TextFeildInput from "../../atoms/TextField.atom";

export function Footer({ classes }) {
  const popularTopics = [
    {
      id: 1,
      topic: "Gun Sights",
      link: "/gunshights",
    },
    {
      id: 2,
      topic: "Browning",
      link: "/browning",
    },
    {
      id: 3,
      topic: "Bracelets",
      link: "/bracelets",
    },
    {
      id: 4,
      topic: "Scopes & Optics",
      link: "/scopes-optics",
    },
  ];
  const popular = [
    {
      id: 1,
      topic: "Gun Models",
      link: "/gunshights",
    },
    {
      id: 2,
      topic: "Popular Ammo",
      link: "/browning",
    },
    {
      id: 3,
      topic: "Popular Scare",
      link: "/bracelets",
    },
    {
      id: 4,
      topic: "",
      link: "/scopes-optics",
    },
  ];
  const manufacturers = [
    {
      id: 1,
      topic: "Gun Manufacturer",
      link: "/gunshights",
    },
    {
      id: 2,
      topic: "Rifle manufacturer",
      link: "/browning",
    },
    {
      id: 3,
      topic: "Parts / Accessories",
      link: "/bracelets",
    },
    {
      id: 4,
      topic: "Manufacturer",
      link: "/scopes-optics",
    },
  ];
  return (
    <React.Fragment>
      <Grid className={classes.div_background_footer}>
        <Grid className={classes.center_grid}>
          <Grid container className={classes.img_hover_opcatiy}>
            <Grid item xs={3} className={classes.gridCardFooter}>
              <Paper className={classes.paperCardFooter} elevation={0}>
                <Typography
                  variant="h6"
                  className={classes.typo_footer}
                  component="h1"
                >
                  Popular Topics
                </Typography>
                <List>
                  {popularTopics.map((d, i) => (
                    <ListItem>
                      <Link to="/" className={classes.link_root}>
                        <ListItemText primary={d.topic} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={3} className={classes.gridCardFooter}>
              <Paper className={classes.paperCardFooter} elevation={0}>
                <Typography
                  variant="h6"
                  className={classes.typo_footer}
                  component="h1"
                >
                  Popular
                </Typography>
                <List>
                  {popular.map((d, i) => (
                    <>
                      <ListItem>
                        <Link to="/" className={classes.link_root}>
                          <ListItemText primary={d.topic} />
                        </Link>
                      </ListItem>
                      {d.id === 3 ? (
                        <ListItem>
                          <svg
                            id="germany"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 54 54"
                          >
                            <defs>
                              <pattern
                                id="pattern"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                                viewBox="0 0 512 512"
                              >
                                <image
                                  width="512"
                                  height="512"
                                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAiUSURBVHic7dmhTQAwAETRlhSDxiEZggUYHcMKOBiCBFW2aMV/b4KTP7m59x4AQMvD7QEAwHkCAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAiab+Pp+/YIAOCsOcbYt0cAAGe5AAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABC0Psbr7Q0AwGHreazbGwCAw1wAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAErceXdXsDAHDY3F/v+/YIAOAsFwAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACC1u/n38/tEQDAWXPvfXsDAHCYCwAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEPQPw3IT+CUEFuoAAAAASUVORK5CYII="
                                />
                              </pattern>
                            </defs>
                            <rect
                              id="germany-2"
                              data-name="germany"
                              width="54"
                              height="54"
                              rx="3"
                              fill="url(#pattern)"
                            />
                          </svg>
                        </ListItem>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                  <Typography
                    variant="h6"
                    className={classes.typo_footer}
                    component="h1"
                  ></Typography>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={3} className={classes.gridCardFooter}>
              <Paper className={classes.paperCardFooter} elevation={0}>
                <Typography
                  variant="h6"
                  className={classes.typo_footer}
                  component="h1"
                >
                  Manufacturers
                </Typography>
                <List>
                  {manufacturers.map((d, i) => (
                    <ListItem>
                      <Link to="/" className={classes.link_root}>
                        <ListItemText primary={d.topic} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={3} className={classes.gridCardFooter}>
              <Paper className={classes.paperCardFooter} elevation={0}>
                <Typography
                  variant="h6"
                  className={classes.typo_footer}
                  component="h1"
                >
                  Contact Us
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary={"AVAILABLE 9AM-6PM"} />
                  </ListItem>
                  <ListItem>
                    <MailOutlineIcon />{" "}
                    <ListItemText primary={" dummy@gmail.com"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={""} />
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemText className={classes.socail_icon}>
                      <img src={Fb} className={classes.bg_icon_socail} alt="" />
                      <img
                        src={Twitte}
                        className={classes.bg_icon_socail}
                        alt=""
                      />
                      <img
                        src={Insta}
                        className={classes.bg_icon_socail}
                        alt=""
                      />
                    </ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={8} className={classes.gridCardFooter8}>
              <Paper className={classes.paperCardFooter} elevation={0}>
                <Typography variant="h5" className={classes.typo_footer_normal}>
                  SIGN UP FOR NEWSLETTER
                </Typography>
                <TextFeildInput />
              </Paper>
            </Grid>
            <Grid item xs={4} className={classes.gridCardFooter4}>
              <Paper className={classes.paperCardFooter} elevation={0}></Paper>
            </Grid>
          </Grid>
          <Grid item xs={8} className={classes.gridCardFooter8_hide}>
            <Paper className={classes.paperCardFooter} elevation={0}>
              <Typography variant="h5" className={classes.typo_footer_normal}>
                SIGN UP FOR NEWSLETTER
              </Typography>
              <TextFeildInput />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <CopyrightDash />
      </Grid>
    </React.Fragment>
  );
}
