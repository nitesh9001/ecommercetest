import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "220px",
    background: "white",
    margin: "0 auto",
    color: "black",
  },
  color_link: {
    color: "black",
    background: "red !important",
    textTransform: "uppercase",
  },
}));

const SimpleBreadcrumb = (props) => {
  const classes = useStyles();
  console.log(props.location.path);
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Grid
      className={classes.root}
      xs={11}
      spacing={3}
      direction="row"
      justify="space-around"
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="secondary" href="#" style={{ textTransform: "uppercase" }}>
          Home
        </Link>
        {pathnames.map((d, i) => (
          <Link
            key={i}
            href={`/${d}`}
            classname={classes.color_link}
            color="textPrimary"
            style={{ textTransform: "uppercase" }}
          >
            {d}
          </Link>
        ))}
        {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
      </Breadcrumbs>
    </Grid>
  );
};
export default withRouter(SimpleBreadcrumb);
