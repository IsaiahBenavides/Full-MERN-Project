import { Container } from "@material-ui/core";
import PostForm from "../../components/PostForm/PostForm.js"
import Post from "../../components/Posts/Post/Post.js";

export default function PostPage({ currentId, setCurrentId }) {
  return (
    <>
      <div>Edit post</div>
      <Container>
        <Post currentId={currentId} setCurrentId={setCurrentId}></Post>
        <PostForm currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </>
  );
}
