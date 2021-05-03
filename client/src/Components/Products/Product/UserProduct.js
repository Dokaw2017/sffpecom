import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_POST_BY_ID } from "../../../graphql/mutation";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

const UserProduct = ({ userproduct }) => {
  const classes = useStyles();
  //the query responsible for the delete operation
  const [
    deletePost,
    { error: deleteError, loading, data: deleteData },
  ] = useMutation(DELETE_POST_BY_ID, {
    onError(error) {
      console.log("iiiiii", error);
    },
  });

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={userproduct.featureImage}
        title={userproduct.title}
        component={Link}
        to={`/posts/${userproduct.id}`}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {userproduct.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${userproduct.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Delete"
          onClick={() =>
            deletePost({
              variables: {
                id: userproduct.id,
                owner: localStorage.getItem("id"),
              },
            })
          }
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="Edit"
          component={Link}
          to={`/update/${userproduct.id}`}
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserProduct;
