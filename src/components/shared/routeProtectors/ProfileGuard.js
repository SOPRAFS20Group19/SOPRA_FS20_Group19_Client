import React from "react";
import {Redirect} from "react-router-dom";

export const ProfileGuard = props => {
    if (localStorage.getItem("userId")) {
        return props.children;
    }
    // if user is not logged in, redirect to the map
    return <Redirect to={"/map"}/>;
};