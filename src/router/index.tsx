import { home, about, article, friends, archive, category } from "@/pages";
import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import { lazy } from "react";
const routes: RouteConfig[] = [
  { path: "/", exact: true, render: () => <Redirect to={"/home"} /> },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/archive",
    component: archive,
  },
  {
    path: "/article/:id",
    component: article,
  },
  {
    path: "/tag/:id",
    component: lazy(() => import("@/pages/tag/tag")),
  },
  {
    path: "/category/:id",
    component: lazy(() => import("@/pages/category/category")),
  },
  {
    path: "/friends",
    component: friends,
  },
];

export default routes;
