import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import UserProduct from "./Product/UserProduct";
import useStyles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_All_POSTS } from "../../graphql/query";
import { GET_CURRENT_USER } from "../../graphql/query";
import { GET_USER_POSTS } from "../../graphql/query";

const Products = () => {
  //query for the current logged in user
  const { data, error } = useQuery(GET_CURRENT_USER, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  //query responsible for the whole product in the shop. vistor not expected to login to visit the shop
  const { loading, data: allposts, error: allposterror } = useQuery(
    GET_All_POSTS,
    {
      onError(error) {
        console.log("iiiiii", error);
      },
    }
  );

  console.log("product", allposterror);

  //query responsible for the logged in user product
  const { loading: forUser, data: userposts } = useQuery(GET_USER_POSTS, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  const classes = useStyles();

  //it sorts the template based on the logged in user which is represented by data.it doesnt show the description
  const store = data ? (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {userposts?.getUserPosts &&
          userposts?.getUserPosts.map((userpo) => (
            <Grid key={userpo.id} item xs={12} sm={6} md={4} lg={3}>
              <UserProduct userproduct={userpo} />
            </Grid>
          ))}
      </Grid>
    </main>
  ) : (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {allposts?.getAllPosts &&
          allposts?.getAllPosts.map((allpo) => (
            <Grid key={allpo.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={allpo} />
            </Grid>
          ))}
      </Grid>
    </main>
  );

  return store;
};

export default Products;
