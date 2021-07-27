import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  InputBase,
  Button,
  NativeSelect,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListIcon from "@material-ui/icons/List";
export function TableHeader({ classes }) {
  const [displ, setdispls] = useState(true);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000 ? setdispls(false) : setdispls(true);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  return (
    <Grid
      container
      spacing={1}
      xs={11}
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h6" className={classes.headingTbale}>
        Result For Showcase Items
      </Typography>
      <Grid
        container
        direction="row"
        spacing={1}
        xs={12}
        justify="space-between"
        alignItems="center"
        className={classes.root_in_table}
      >
        <Grid
          item
          direction="row"
          spacing={1}
          justify="space-between"
          alignItems="center"
          className={classes.root_innerflex}
        >
          {displ ? (
            <Typography varient={"h6"} className={classes.headingTbal}>
              Sort Showcase Item by :
            </Typography>
          ) : (
            ""
          )}
          <div className={classes.searchBox_sort}>
            <Grid item className={classes.selectSorting}>
              <select
                id="demo-customized-select-native"
                value={10}
                disableUnderline={true}
                className={classes.selectCustom}
              >
                <option value="all_categories">All Showcase Item</option>
                <option value="test1">Test1</option>
                <option value="test2">Test1</option>
                <option value="test3">Test1</option>
              </select>
              <Button
                variant="contained"
                color="secondary"
                className={classes.search_btn_in_arrow}
              >
                <ExpandMoreIcon className={classes.search_btn_in_arro} />
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          direction="row"
          spacing={1}
          justify="space-between"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.search_btn_in_list}
          >
            <GridOnIcon className={classes.lisitng_style} /> Grid View
          </Button>

          <Button
            variant="contained"
            style={{ background: "white" }}
            className={classes.search_btn_in_list}
          >
            <ListIcon className={classes.lisitng_style} /> List View
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
