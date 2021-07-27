import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

export function About({ classes }) {
  return (
    <Grid container xs={12} className={classes.aboutImage}>
      <Grid className={classes.aboutImage_content}>
        <Paper className={classes.aboutImage_paper}>
          <Typography variant="h6" className={classes.aboutImage_paper_typo}>
            What is Guns.com ?
          </Typography>
          <Typography className={classes.aboutImage_paper_typotext}>
            Passionate about guns? Guns.com is the perfect place for you!
            Guns.com is a marketplace of gun enthusiasts dedicated to sharing
            our affinity for guns.
          </Typography>
          <Typography className={classes.aboutImage_paper_typotext}>
            Here you can buy guns online, find guns for sale online, discover
            new guns, and get information about guns. Think of Guns.com as your
            gun spot for all things guns. The Guns.com marketplace goes beyond
            guns for sale, and offers hunting gear, gun parts / accessories,
            collectibles, and much more.
          </Typography>
          <Grid item className={classes.aboutImage_paper_button}>
            <Button variant="contained" color="secondary">
              Read More
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
