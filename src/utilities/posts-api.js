import sendRequest from "./send-request.js";
const BASE_URL = "/api/posts";

export function createPost(postData) {
    return sendRequest(`${BASE_URL}/createpost`, "POST", {postData})
}

export function updatePost(currentId, postData) {
    return sendRequest(`${BASE_URL}/updatepost/${currentId}`, "POST", {currentId, postData})
}

export function getPosts() {
    return sendRequest(`${BASE_URL}/createposts`, "GET")
}