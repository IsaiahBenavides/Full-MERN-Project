import useStyles from "./styles.js";
import Posts from "../../components/Posts/Posts.js";
import PostForm from "../../components/PostForm/PostForm.js";
import { Container, Grid, Grow } from "@material-ui/core";

export default function HomePage({
  currentPosts,
  setCurrentPosts,
  currentId,
  setCurrentId,
}) {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.Header} >HomePage</h1>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts
                  currentPosts={currentPosts}
                  setCurrentPosts={setCurrentPosts}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              </Grid>
              {currentId ? (
                <Grid item xs={12} sm={5}>
                  <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              ) : null}
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}
