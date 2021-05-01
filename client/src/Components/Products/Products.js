import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import UserProduct from "./Product/UserProduct";
import useStyles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_All_POSTS } from "../../graphql/query";
import { GET_CURRENT_USER } from "../../graphql/query";
import { GET_USER_POSTS } from "../../graphql/query";

const Products = ({ products, onAddToCart }) => {
  const { data, error } = useQuery(GET_CURRENT_USER);

  const { loading, data: allposts } = useQuery(GET_All_POSTS);

  const { loading: forUser, data: userposts } = useQuery(GET_USER_POSTS);

  const classes = useStyles();

  //if (!products.length) return <p>Loading...</p>;

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
              <Product product={allpo} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    </main>
  );

  return store;
};

export default Products;
