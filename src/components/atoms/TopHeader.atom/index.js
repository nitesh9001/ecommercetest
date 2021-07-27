import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export function TopHeader({ classes }) {

    return (
        // <Grid item xs={12} classes={{'root': classes.topHeaderRoot }}>
        <Grid
            container
            direction="row"
            xs={12}
            justify="center"
            alignItems="center"
            className={classes.topHeaderRoot}
        >        
            <Typography className={classes.topHeaderText} variant="body1">
                FREE US SHIPPING & RETURNS | GET 10% OFF ON YOUR FIRT ORDER WITH CODE NEW10. 
            </Typography>
        </Grid>
    );
}
