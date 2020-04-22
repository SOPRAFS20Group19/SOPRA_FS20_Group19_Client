import React from "react";
import { Redirect } from "react-router-dom";

/**
 *
 * Another way to export directly your functional component.
 */
export const LoginGuard = props => {
  if (!localStorage.getItem("userId")) {
    return props.children;
  }
  // if user is already logged in, redirects to the map
  return <Redirect to={"/map"} />;
};
