import { createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "../Home/Home";
import Root from "../Root/Root";
import NavApps from "../Apps.jsx/NavApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () => fetch("Apps.json").then(res=>res.json()),
        Component: Home
      },
      {
        path: "/Apps",
        Component: NavApps
      }
    ],
  },
]);