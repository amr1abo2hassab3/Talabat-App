import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import CookieServices from "../../services/CookieServices";

interface IProtectedRouteApp {
  children: ReactNode;
}

const ProtectedRouteApp = ({ children }: IProtectedRouteApp) => {
  const isAuthenticated = CookieServices.get("userData");
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return children;
};

export default ProtectedRouteApp;
