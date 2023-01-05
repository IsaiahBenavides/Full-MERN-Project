import * as postAction from "../../utilities/posts-api"; 

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await postAction.getPosts();

        dispatch({ type: 'GET', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (postData) => async (dispatch) => {
    try {
        const { data } = await postAction.createPost(postData);

        dispatch({ type: 'POST', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (currentId, postData) => async (dispatch) => {
    try {
        const { data } = await postAction.updatePost(currentId, postData)

        dispatch({ type: 'PUT', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (currentId) => async (dispatch) => {
    try {
        const { data } = await postAction.deletePost(currentId)

        dispatch({ type: 'DELETE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}