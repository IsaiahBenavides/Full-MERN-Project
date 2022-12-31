import * as postsAPI from './posts-api'

export async function createPost(postData) {
    const token = await postsAPI.createPost(postData)
}

export async function updatePost(currentId, postData) {
    const token = await postsAPI.createPost(currentId, postData)
}

export async function getPosts() {
    const token = await postsAPI.getPosts() 
}