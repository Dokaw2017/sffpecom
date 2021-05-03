import { useQuery } from "@apollo/react-hooks";
import { GET_All_POSTS } from "../graphql/query";
import { Grid } from "semantic-ui-react";
import PostCard from "../Components/PostCard";
import { GET_CURRENT_USER } from "../graphql/query";
import { GET_USER_POSTS } from "../graphql/query";

const Home = () => {
  const { data, error } = useQuery(GET_CURRENT_USER, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });
  console.log("home", data, error);

  const { loading, data: allposts } = useQuery(GET_All_POSTS, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  if (allposts) {
    console.log(allposts);
  }
  const { loading: forUser, data: userposts } = useQuery(GET_USER_POSTS, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  if (userposts) {
    console.log(userposts);
  }

  const store = data ? (
    <Grid columns={3}>
      <Grid.Row>
        {loading ? (
          <h1>loading posts...</h1>
        ) : (
          userposts?.getUserPosts &&
          userposts?.getUserPosts.map((userpo) => (
            <Grid.Column key={userpo.id}>
              <PostCard res={userpo} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  ) : (
    <Grid columns={3}>
      <Grid.Row>
        {loading ? (
          <h1>loading posts...</h1>
        ) : (
          allposts?.getAllPosts &&
          allposts?.getAllPosts.map((allpo) => (
            <Grid.Column key={allpo.id}>
              <PostCard res={allpo} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );

  return store;
};

export default Home;
