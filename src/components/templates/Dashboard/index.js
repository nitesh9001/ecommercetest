import React from "react";
import { useStyles } from "./style";
import { Layout, TopHeader } from "../../atoms";
import { AdImage, List, CardCarousel, Partners, About } from "../../molecules";

export function DashboardTemplate() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout classes={classes}>
        <AdImage classes={classes} />
        <List
          classes={classes}
          type="showcase"
          label="Show case items"
          page="products"
        />
        <About classes={classes} />
        <CardCarousel
          classes={classes}
          type="slider"
          label="Featured Products"
        />
        <List
          classes={classes}
          type="sponsored"
          label="Sponsored items"
          page="listing"
        />
        <Partners classes={classes} />
      </Layout>
    </React.Fragment>
  );
}
