import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

export function AdImage({ classes }) {
    return (
        <Grid container xs={12} className={classes.adImage}>
            <Typography variant="h4" className="txt1">
                Rockwall Professional Firefighters
            </Typography>
            <Typography variant="h6" className="txt2">
                Association
            </Typography>
            <Typography variant="h5" className="txt3">
                Association
            </Typography>
            <Button variant="contained" color="secondary">
                 Shop Best Seller
            </Button>
        </Grid>
    )
}