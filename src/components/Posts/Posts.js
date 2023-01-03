import React, { useEffect } from "react";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import * as postAction from "../../utilities/posts-api";

import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = ({ currentPosts, setCurrentPosts, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  
  const classes = useStyles();
  
  useEffect(() => {
      async function fetchCurrentPosts() {
        const postCollection = await postAction.getPosts();
        // await postCollection
        setCurrentPosts(postCollection)
    }
    fetchCurrentPosts()
  }, []);

  async function handleGet(evt) {
    evt.preventDefault();
    // console.log(postCollection)
    console.log(`hit`);
    try {
        
    } catch (error) {
      console.log(error);
    }
  }

//   console.log(postCollection);

  return !currentPosts.length ? (
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
