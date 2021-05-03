import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Payement from "../../StripeCheckout";

const Product = ({ product }) => {
  console.log(product);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.featureImage}
        title={product.title}
        component={Link}
        to={`/posts/${product.id}`}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Payement product={product} />
      </CardActions>
    </Card>
  );
};

export default Product;
