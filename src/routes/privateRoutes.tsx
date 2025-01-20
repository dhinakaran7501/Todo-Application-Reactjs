import { Navigate, Outlet } from "react-router-dom";
import { credential } from "../config";
import { getCookie } from "../utils/helpers";

export const AuthPrivateRoute = () => {
  const getCookieData = getCookie(credential);
  return getCookieData ? <Navigate to={"/todo/dashboard"} /> : <Outlet />;
};

export const HomePrivateRoute = () => {
  const getCookieData = getCookie(credential);
  return getCookieData ? <Outlet /> : <Navigate to={"/login"} />;
};
