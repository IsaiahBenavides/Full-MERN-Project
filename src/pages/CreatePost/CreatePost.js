import PostForm from "../../components/PostForm/PostForm.js"

export default function CreatePost({ currentId, setCurrentId }) {
    return(
        <PostForm currentId={currentId} setCurrentId={setCurrentId} />
    )
}