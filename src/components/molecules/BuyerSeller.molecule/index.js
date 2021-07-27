import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { fbcom, instacom, twitercom } from "../../../assets";

export function BuyerSeller({ classes }) {
  const popularTopics = [
    {
      id: 1,
      topic: "Contact Us",
      link: "/contactus",
    },
    {
      id: 2,
      topic: " FAQ",
      link: "/faq",
    },
    {
      id: 3,
      topic: "About",
      link: "/about",
    },
    {
      id: 4,
      topic: "Register",
      link: "/register",
    },
    {
      id: 5,
      topic: "Site Map",
      link: "/register",
    },
    {
      id: 6,
      topic: "Support Page",
      link: "/supportpage",
    },
    {
      id: 7,
      topic: " What's New",
      link: "/whatNew",
    },
  ];
  const popular = [
    {
      id: 1,
      topic: "Tools for Buyers",
      link: "/Tools for Buyers",
    },
    {
      id: 2,
      topic: "New Buyers",
      link: "/ New Buyers",
    },
    {
      id: 3,
      topic: "How To Buy",
      link: "/How To Buy",
    },
    {
      id: 4,
      topic: "Buyer's -Protection",
      link: "/buyer-Protections",
    },
    {
      id: 5,
      topic: "Find An FFL",
      link: "/buyer-Protections",
    },
    {
      id: 6,
      topic: "Guns.com Pricing Report",
      link: "/Guns-Pricing-Report",
    },
  ];
  const manufacturers = [
    {
      id: 1,
      topic: "Tools for Sellers",
      link: "/gunshights",
    },
    {
      id: 2,
      topic: "New Sellers",
      link: "/browning",
    },
    {
      id: 3,
      topic: "How To Sell",
      link: "/bracelets",
    },
    {
      id: 4,
      topic: "Fees & Services",
      link: "/scopes-optics",
    },
    {
      id: 5,
      topic: "Join our FFL Network",
      link: "/scopes-optics",
    },
    {
      id: 6,
      topic: "FFL/Dealer Services",
      link: "/scopes-optics",
    },
    {
      id: 7,
      topic: "Dealer Store",
      link: "/scopes-optics",
    },
  ];
  return (
    <React.Fragment>
      <Paper elevation={2} xs={12} className={classes.divider}></Paper>
      <Grid className={classes.div_background_footer_nav}>
        <Grid className={classes.center_grid_nav}>
          <Grid item className={classes.gridCardFooter_nav}>
            <Paper className={classes.paperCardFooter_nav} elevation={0}>
              <Typography className={classes.typo_footer_nav}>HELP</Typography>
              <List>
                {popularTopics.map((d, i) => (
                  <ListItem className={classes.listclass_nav}>
                    <Link to="/" className={classes.link_root}>
                      <ListItemText primary={d.topic} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item className={classes.gridCardFooter_nav}>
            <Paper className={classes.paperCardFooter_nav} elevation={0}>
              <Typography className={classes.typo_footer_nav}>
                BUYERS
              </Typography>
              <List>
                {popular.map((d, i) => (
                  <>
                    <ListItem className={classes.listclass_nav}>
                      <Link to="/" className={classes.link_root}>
                        <ListItemText primary={d.topic} />
                      </Link>
                    </ListItem>
                  </>
                ))}
                <Typography className={classes.typo_footer_nav}></Typography>
              </List>
            </Paper>
          </Grid>
          <Grid item className={classes.gridCardFooter_nav}>
            <Paper className={classes.paperCardFooter_nav} elevation={0}>
              <Typography className={classes.typo_footer_nav}>
                SELLERS
              </Typography>
              <List>
                {manufacturers.map((d, i) => (
                  <ListItem className={classes.listclass_nav}>
                    <Link to="/" className={classes.link_root}>
                      <ListItemText primary={d.topic} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item className={classes.gridCardFooter_nav}>
            <Paper className={classes.paperCardFooter_nav} elevation={0}>
              <Typography
                className={classes.typo_footer_nav}
                style={{ textAlgin: "center !important", margin: "0 auto" }}
              >
                FOLLOW US ON
              </Typography>
              <List className={classes.socail_icon_list}>
                <ListItem>
                  <ListItemText className={classes.socail_icon}>
                    <img
                      src={fbcom}
                      className={classes.bg_icon_socail_c}
                      alt=""
                    />
                    <img
                      src={twitercom}
                      className={classes.bg_icon_socail_c}
                      alt=""
                    />
                    <img
                      src={instacom}
                      className={classes.bg_icon_socail_c}
                      alt=""
                    />
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
