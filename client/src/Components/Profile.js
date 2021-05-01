import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../graphql/query";
import { GET_USER_POSTS } from "../graphql/query";
import { Upload } from "../Upload";
import React from "react";
import useStyles from "./styles";

const Profile = () => {
  const { data, error } = useQuery(GET_CURRENT_USER);
  const { data: userposts } = useQuery(GET_USER_POSTS);

  const token = window.localStorage.getItem("token");
  console.log("userpppppp", userposts);
  console.log("uuu", data);
  console.log("tttt", error);
  const classes = useStyles();

  return (
    <div className="profile">
      <h3>Profile</h3>
      {
        <p>
          {`${data?.authUserProfile.username} ${data?.authUserProfile.email}`}
        </p>
      }

      <Upload />
    </div>
  );
};

export default Profile;
