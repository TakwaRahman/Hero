import { createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "../Home/Home";
import Root from "../Root/Root";
import NavApps from "../Apps.jsx/NavApps";
import AppsDetails from "../AppsDetails/AppsDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import ErrorDetails from "../AppsDetails/ErrorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("Apps.json").then(res => res.json()),
        Component: Home
      },
      {
        path: "/apps",
        loader: () => fetch("Apps.json").then(res => res.json()),
        Component: NavApps
      },
      {
        path: "/appsDetails/:id",
        loader: () => fetch("Apps.json").then(res => res.json()),
        errorElement: <ErrorDetails></ErrorDetails>,
        Component: AppsDetails
      }
    ],
  },
]);