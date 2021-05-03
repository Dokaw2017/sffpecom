import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import { GET_CURRENT_USER } from "../../graphql/query";
import logo from "../../assets/logo.jpg";
import useStyles from "./styles";
import { useQuery } from "@apollo/react-hooks";

const PrimarySearchAppBar = ({ totalItems }) => {
  //This is for the mobile responsiveness
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  //quering the current user
  const { data, client } = useQuery(GET_CURRENT_USER, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  //a logout functions that clears the id and token from the local storage
  const handlelogout = (e) => {
    try {
      e.preventDefault();
      window.localStorage.clear();
      client.resetStore();
    } catch (error) {
      console.log(error);
    } finally {
      history.push("/");
    }
  };

  //this is where the mobile menu bar starts
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  //The menu bar displays in two forms after getting the id of the logged in user from the local storage
  const store = localStorage.getItem("id") ? (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            ShifaSuke
          </Typography>
          <Button color="inherit" to="/add" component={Link}>
            Add
          </Button>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <Button color="inherit" to="/profile" component={Link}>
                Profile
              </Button>
              <Button color="inherit" onClick={handlelogout}>
                Logout
              </Button>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  ) : (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            ShifaSuke
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <Button color="inherit" to="/signup" component={Link}>
                Register
              </Button>
              <Button color="inherit" to="/login" component={Link}>
                Login
              </Button>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
  return store;
};

export default PrimarySearchAppBar;
