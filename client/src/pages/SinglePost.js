import { useQuery } from "@apollo/react-hooks";
import { POST_BY_ID } from "../graphql/query";
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

import useStyles from "./styles";

const SinglePost = (props) => {
  const id = props.match.params.postId;
  console.log(id);
  const classes = useStyles();
  //   const handleAddToCart = () => onAddToCart(product.id, 1);
  const { data } = useQuery(POST_BY_ID, {
    variables: {
      id,
    },
  });

  console.log(data);

  let postMarkUp;
  if (!data?.getPostById) {
    postMarkUp = "I will be here soon";
  } else {
    const {
      id,
      title,
      description,
      category,
      price,
      featureImage,
    } = data?.getPostById;

    postMarkUp = (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={featureImage}
          title={title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${price}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
  return postMarkUp;
};

export default SinglePost;
