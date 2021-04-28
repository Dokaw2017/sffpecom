import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

const PostCard = ({
  res: { id, title, description, featureImage, createdAt, updatedAt },
}) => {
  const likePost = () => {
    console.log("I have liked it");
  };

  const commentOnPost = () => {
    console.log("I have a few comments");
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image src={featureImage} />
        <Card.Header>{title}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="teal" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="teal" pointing="left">
            2,048
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            2,048
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
