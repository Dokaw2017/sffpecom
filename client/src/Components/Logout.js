import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../graphql/query";

const LogoutButton = (props) => {
  const { client } = useQuery(GET_CURRENT_USER);

  const logout = () => {
    window.localStorage.clear();
    client.resetStore();
    props.history.push("/");
  };

  logout();
};

export default LogoutButton;
