import sendRequest from "./send-request.js";
const BASE_URL = "/api/posts";

export function createPost(postData) {
    return sendRequest(`${BASE_URL}`, "POST", postData)
}

export function updatePost(currentId, postData) {
    return sendRequest(`${BASE_URL}/${currentId}`, "PUT", postData)
}

export function getPosts() {
    return sendRequest(`${BASE_URL}`, "GET")
}

export function deletePost(currentId) {
    return sendRequest(`${BASE_URL}/${currentId}`, "DELETE")
} 