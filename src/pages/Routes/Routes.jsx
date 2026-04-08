import { createBrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "../Home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home
      },
    ],
  },
]);