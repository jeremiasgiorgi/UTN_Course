import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated ) {
    navigate("/login");
    return null;
  }

  return <Outlet />;
};
export default ProtectedRoute;