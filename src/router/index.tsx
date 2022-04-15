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
    path: "/category",
    component: category,
  },
  {
    path: "/archive",
    component: archive,
  },
  {
    path: "/article",
    component: article,
  },
  {
    path: "/tag",
    component: lazy(() => import("@/pages/tag/tag")),
  },
  {
    path: "/friends",
    component: friends,
  },
];

export default routes;
