import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../graphql/query";
import useStyles from "./styles";

const Profile = () => {
  const { data, error } = useQuery(GET_CURRENT_USER, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  const classes = useStyles();

  return (
    <div className="profile">
      <h3>Profile</h3>
      {
        <p>
          {`${data?.authUserProfile.username} ${data?.authUserProfile.email}`}
        </p>
      }
    </div>
  );
};

export default Profile;
