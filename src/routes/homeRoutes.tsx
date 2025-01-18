import { RouteObject } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { HomePrivateRoute } from "./privateRoutes";
import Dashboard from "../views/Dashboard";
import Lists from "../views/Lists";

export const HomeRouter: RouteObject[] = [
  {
    path: "/todo",
    element: <HomePrivateRoute />,
    children: [
      {
        element: <Navbar />,
        children: [
          {
            index: true,
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "lists",
            element: <Lists />,
          },
        ],
      },
    ],
  },
];
