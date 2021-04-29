import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { AddShoppingCart } from "@material-ui/icons";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_POST_BY_ID } from "../../../graphql/mutation";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const [deletePost, { error, loading, data }] = useMutation(DELETE_POST_BY_ID);

  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);
  const handleEdit = () => {};

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.featureImage}
        title={product.title}
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
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Edit"
          onClick={() =>
            deletePost({
              variables: { id: product.id, owner: localStorage.getItem("id") },
            })
          }
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
