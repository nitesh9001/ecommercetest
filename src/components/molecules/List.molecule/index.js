import React from "react";
import { CardAtom } from "../../atoms/Card.atom";
import { Grid, Typography, Button } from "@material-ui/core";

export function List({ classes, type, label, page }) {
  return (
    <Grid container direction="row" xs={12} className={classes.root}>
      <Grid
        container
        direction="row"
        xs={10}
        spacing={1}
        justify="space-between"
        alignItems="center"
        className={classes.root_header}
      >
        <Grid className={classes.listTitle} item>
          <Typography variant={"h6"} className={classes.listTitle_h}>
            {label}
          </Typography>
        </Grid>
        <Grid className={classes.listViewAll} item>
          {type === "listing" || type === "sponsoredList" ? (
            ""
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn_shadow}
              onClick={() => {
                window.location.href = `/${page}`;
              }}
            >
              View More
            </Button>
          )}
        </Grid>
      </Grid>
      {type !== "sponsoredList" ? (
        <Grid
          container
          direction="row"
          spacing={1}
          xs={12}
          justify="center"
          className={classes.root_flex}
        >
          {type === "showcase" ? (
            <React.Fragment>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
              <Grid item className={classes.cardGrid}>
                <CardAtom classes={classes} type={type} />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      ) : (
        <Grid
          container
          spacing={1}
          justify="center"
          className={classes.root_flex_horizontal}
        >
          <React.Fragment>
            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>
            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>

            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>
            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>
            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>
            <Grid item className={classes.cardGrid_hori}>
              <CardAtom classes={classes} type={type} />
            </Grid>
          </React.Fragment>
        </Grid>
      )}
    </Grid>
  );
}
