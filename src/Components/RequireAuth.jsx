import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import Spinner from "./Spinner";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthUser();
  let location = useLocation();

  console.log(user);

  if (loading) {
    return <Spinner />;
  }

  if (!user.result) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
