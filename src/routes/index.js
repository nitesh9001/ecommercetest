import React from "react";
import { ROLE, ROUTE_NAME } from "../utils/constants";
import {
  LoginPage,
  Dashboard,
  ShowCaseSingle,
  ShowCase,
} from "../components/pages";
import { ShowCaseListViewTemplate } from "../components/templates";
import { ShowCaseCoupon } from "../components/pages/ShowCaseCoupon";

export const routes = [
  {
    path: ROUTE_NAME.BASE,
    title: ROUTE_NAME.BASE,
    exact: true,
    component: (props) => <Dashboard />,
    role: ROLE.COMMON,
  },
  {
    path: ROUTE_NAME.LOGIN,
    title: ROUTE_NAME.LOGIN,
    exact: true,
    component: (props) => <LoginPage />,
    role: ROLE.COMMON,
  },
  {
    path: ROUTE_NAME.PRODUCT,
    title: ROUTE_NAME.PRODUCT,
    exact: true,
    component: (props) => <ShowCaseSingle />,
    role: ROLE.COMMON,
  },
  {
    path: ROUTE_NAME.COUPON,
    title: ROUTE_NAME.COUPON,
    exact: true,
    component: (props) => <ShowCaseCoupon />,
    role: ROLE.COMMON,
  },
  {
    path: ROUTE_NAME.PRODUCTS,
    title: ROUTE_NAME.PRODUCTS,
    exact: true,
    component: (props) => <ShowCase />,
    role: ROLE.COMMON,
  },
  {
    path: ROUTE_NAME.PRODUCTS_List,
    title: ROUTE_NAME.PRODUCTS_List,
    exact: true,
    component: (props) => <ShowCaseListViewTemplate />,
    role: ROLE.COMMON,
  },
];

export const commomRoutes = [
  {
    path: ROUTE_NAME.BASE,
    title: ROUTE_NAME.BASE,
    exact: true,
    component: (props) => <Dashboard />,
    role: ROLE.ADMIN,
  },
  {
    path: ROUTE_NAME.PRODUCT,
    title: ROUTE_NAME.PRODUCT,
    exact: true,
    component: (props) => <ShowCaseSingle />,
    role: ROLE.ADMIN,
  },
  {
    path: ROUTE_NAME.COUPON,
    title: ROUTE_NAME.COUPON,
    exact: true,
    component: (props) => <ShowCaseCoupon />,
    role: ROLE.ADMIN,
  },
  {
    path: ROUTE_NAME.PRODUCTS_List,
    title: ROUTE_NAME.PRODUCTS_List,
    exact: true,
    component: (props) => <ShowCaseListViewTemplate />,
    role: ROLE.ADMIN,
  },
  {
    path: ROUTE_NAME.PRODUCTS,
    title: ROUTE_NAME.PRODUCTS,
    exact: true,
    component: (props) => <ShowCase />,
    role: ROLE.ADMIN,
  },
];

export const adminRoutes = [];

export const userRoutes = [];
