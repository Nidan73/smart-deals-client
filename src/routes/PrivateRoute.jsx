import React, { useContext } from "react";

import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>loading</p>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/register"></Navigate>;
};

export default PrivateRoute;
