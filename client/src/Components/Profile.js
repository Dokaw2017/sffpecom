import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../graphql/query";

const Profile = () => {
  const { data, error } = useQuery(GET_CURRENT_USER);
  const token = window.localStorage.getItem("token");
  console.log(token);
  console.log("uuu", data);
  console.log("tttt", error);

  return (
    <div>
      <h3>Profile</h3>
      <p>
        {`${data?.authUserProfile.username} ${data?.authUserProfile.email}`}
      </p>
    </div>
  );
};

export default Profile;
