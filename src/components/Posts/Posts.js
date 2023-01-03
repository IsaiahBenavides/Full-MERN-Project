import React from "react";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import * as postAction from "../../utilities/posts-api";

import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = ({ currentPosts, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  const postCollection = postAction.getPosts();
  const classes = useStyles();

  async function handleGet(evt) {
    evt.preventDefault();
    console.log(postCollection)
    console.log(`hit`);
    try {

    } catch (error) {
      console.log(error);
    }
  }

  console.log(posts);

  return !posts.length ? (
    <>
      <CircularProgress />
      <Button onClick={handleGet}>Refresh</Button>
    </>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {currentPosts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
