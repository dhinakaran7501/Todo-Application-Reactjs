import { Navigate, RouteObject } from "react-router-dom";
import { AuthPrivateRoute } from "./privateRoutes";
import Login from "../layouts/Login";
import Signup from "../layouts/Signup";

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
