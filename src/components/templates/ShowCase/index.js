import React from "react";
import { useStyles } from "./style";
import { Layout } from "../../atoms";
import SimpleBreadcrumb from "../../atoms/Bread.atom";
import { BuyerSeller, List, Pagination } from "../../molecules";
import { TableHeader } from "../../molecules/TableHeader.molecule";

export function ShowCaseListTemplate() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout classes={classes}>
        <SimpleBreadcrumb />
        <TableHeader classes={classes} />
        <List classes={classes} type="listing" label="" />
        <Pagination classes={classes} />
        <BuyerSeller classes={classes} />
      </Layout>
    </React.Fragment>
  );
}
