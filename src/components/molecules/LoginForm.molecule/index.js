import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import { Copyright } from "../../atoms";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

export function LoginFormMolecule({ classes, handleLogin }) {
  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Grid container>
        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                value="remember"
                className={classes.checkboxcolor}
              />
            }
            label="keep me logged in"
          />
        </Grid>

        <Grid className={classes.forgetMargin}>
          <Link href="#" variant="body2" className={classes.forgetColor}>
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <br />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
        onClick={handleLogin}
      >
        Sign In
      </Button>
      <Grid item className={classes.center_signup}>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </form>
  );
}
