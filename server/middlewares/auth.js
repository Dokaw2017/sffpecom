//This is a custom middleware
import { SECRET } from "../config/index.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const { verify } = jwt;

const AuthMiddleware = async (req, res, next) => {
  const authHeaders = req.get("Authorization");
  //console.log("AUTH_HEADER", authHeaders);
  if (!authHeaders) {
    req.isAuth = false;
    return next();
  }
  //Extract token
  let token = authHeaders.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  //decode the token using verify
  let decodedToken;
  try {
    decodedToken = verify(token, SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  //Find the user from the database
  let authUser = User.findById(decodedToken.id);

  if (!authUser) {
    req.isAuth = false;
    return next();
  }

  //Set the req user to the fetched user
  req.user = authUser;

  req.isAuth = true;
  return next();
};

export default AuthMiddleware;
