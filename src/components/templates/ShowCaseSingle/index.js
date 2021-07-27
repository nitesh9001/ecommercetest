import React from "react";
import { useStyles } from "./style";
import { HedaerClasses } from "../Dashboard/style";
import { Layout } from "../../atoms";
import SimpleBreadcrumb from "../../atoms/Bread.atom";
import {
  List,
  ImageSlider,
  ProductDatails,
  BuyerSeller,
} from "../../molecules";

export function ShowCaseTemplate() {
  const classes = useStyles();
  const HedaerClasses = useStyles();

  return (
    <React.Fragment>
      <Layout classes={HedaerClasses}>
        <SimpleBreadcrumb />
        <ImageSlider classes={classes} />
        <ProductDatails classes={classes} />
        <List
          classes={classes}
          type="showcase"
          label="Similar Items"
          page="products"
        />
        <BuyerSeller classes={classes} />
      </Layout>
    </React.Fragment>
  );
}
