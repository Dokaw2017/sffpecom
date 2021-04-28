import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { GET_CURRENT_USER } from "../graphql/query";

const MenuBar = () => {
  const { data, client } = useQuery(GET_CURRENT_USER);
  const pathname = window.location.pathname;
  const history = useHistory();
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name == "logout") {
      window.localStorage.clear();
      client.resetStore();
      history.push("/");
    }
  };

  const menuBar = data ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name={`${data?.authUserProfile.username}`}
        active
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={handleItemClick}
          as={Link}
          to="/profile"
        />
        <Menu.Item
          name="logout"
          onClick={handleItemClick}
          as={Link}
          to="/logout"
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="Home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/signup"
        />
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
