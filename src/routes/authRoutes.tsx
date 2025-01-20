import { Navigate, RouteObject } from "react-router-dom";
import { AuthPrivateRoute } from "./privateRoutes";
import Signup from "../layouts/Signup";
import Login from "../layouts/Login";

export const AuthRouter: RouteObject[] = [
  {
    path: "/",
    element: <AuthPrivateRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
];
