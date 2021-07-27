import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import LineStyleIcon from "@material-ui/icons/LineStyle";
export function ProductDatails({ classes }) {
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
    <Grid item conatiner className={classes.root_slider}>
      <Paper className={classes.paper_productdet} elevation={3}>
        <Typography className={classes.product_det_flex}>
          <Typography>
            <LineStyleIcon
              variant={"h6"}
              className={classes.product_det_icon}
            />
          </Typography>
          <Typography className={classes.product_det_text} variant={"h6"}>
            PRODUCT DETAILS
          </Typography>
        </Typography>
        <Typography className={classes.product_det_flex_center}>
          <p style={{ textAlign: "center" }}>
            The NEW Maxim Defense PDX™ is designed to handle the fierce demands
            of the Tier 1 community. The PDX™ dominates close-quarter encounters
            and achieves maximum energy on target. At just 18.75″ in overall
            length, the PDX™ delivers groundbreaking power and performance in a
            subcompact platform.
          </p>
        </Typography>
        <Grid
          item
          conatiner
          xs={11}
          justify="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                ITEM CODE {" : "}
              </ListItemIcon>
              <ListItemText
                primary="SKU1234567"
                className={classes.list_text_flex_text}
              />
            </ListItem>
            <Divider />
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                Location {" : "}
              </ListItemIcon>
              <ListItemText
                primary="USA"
                className={classes.list_text_flex_text}
              />
            </ListItem>
            <Divider />
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                Shippment {" : "}
              </ListItemIcon>
              <ListItemText
                primary="Buyer pays actual shipping costs for the following option(s): Ground "
                className={classes.list_text_flex_text}
              />
            </ListItem>
            <Divider />
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                Applicable Taxes & Fees {" : "}
              </ListItemIcon>
              <ListItemText
                primary="Sales Tax based on ship to address"
                className={classes.list_text_flex_text}
              />
            </ListItem>
            <Divider />
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                Payment Methods {" : "}
              </ListItemIcon>
              <ListItemText
                primary="USPS Money Order, UPI Payment"
                className={classes.list_text_flex_text}
              />
            </ListItem>
            <Divider />
            <ListItem className={classes.list_text_flex}>
              <ListItemIcon className={classes.list_text_icon}>
                Return Policy {" : "}
              </ListItemIcon>
              <ListItemText
                primary="Upto Three days from the delivery date"
                className={classes.list_text_flex_text}
              />
            </ListItem>
          </List>
        </Grid>
      </Paper>
    </Grid>
  );
}
