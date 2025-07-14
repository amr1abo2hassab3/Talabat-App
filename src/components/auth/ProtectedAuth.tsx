import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import CookieServices from "../../services/CookieServices";

interface Iprops {
  children: ReactNode;
}

const ProtectedAuth = ({ children }: Iprops) => {
  const isAuthenticated = CookieServices.get("userData");
  if (isAuthenticated) return <Navigate to={"/"} />;
  return children;
};

export default ProtectedAuth;
