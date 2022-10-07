import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./Spinner";

const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user , loading] = useSelector(state => [state.authUser.user , state.authUser.authUserLoading])

  if (loading) {
    return <Spinner />;
  }

  if (!user.result) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
