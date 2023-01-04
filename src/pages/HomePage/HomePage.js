import { useState } from "react";
import Posts from "../../components/Posts/Posts.js";
import PostForm from "../../components/PostForm/PostForm.js"
import { Button, ButtonGroup, Container } from "@material-ui/core";

export default function HomePage({
  currentPosts,
  setCurrentPosts,
  currentId,
  setCurrentId,
}) {
  return (
    <>
      <h1>HomePage</h1>
      <Container>
        <Posts
          currentPosts={currentPosts}
          setCurrentPosts={setCurrentPosts}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        {currentId ? <PostForm currentId={currentId} setCurrentId={setCurrentId} /> : null }
        
      </Container>
    </>
  );
}
