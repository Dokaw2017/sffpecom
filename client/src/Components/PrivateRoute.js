import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <div>
            <NavBar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
