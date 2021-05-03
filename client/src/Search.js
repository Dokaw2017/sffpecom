import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import UserProduct from "./Product/UserProduct";
import useStyles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { Get_Post_By_Category } from "./graphql/query";

const Products = ({ products, onAddToCart }) => {
  const { data, error } = useQuery(Get_Post_By_Category);

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
