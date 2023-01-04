import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import * as postAction from "../../../utilities/posts-api"

import useStyles from "./styles.js";
const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  const handleDelete = async (e) => {
    console.log(`${post._id} is hit`)

    // postAction.deletePost(post._id)
    const response = await fetch(`/api/posts/deletepost/${post._id}`, {method: "DELETE"})
    const json = response.json()
    if(response.ok) {
      console.log(`response is hit`)
    }
  }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary"onClick={() => {handleDelete()}}>
            <DeleteIcon fontSize="small" />
            Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
