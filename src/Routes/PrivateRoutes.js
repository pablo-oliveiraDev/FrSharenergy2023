import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export default function PrivateRoutes() {
  const { signed } = useContext(AuthContext);

  if (signed) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
