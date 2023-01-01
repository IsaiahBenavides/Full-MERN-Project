const PostMessage = require('../../models/postMessage')
const mongoose = require('mongoose')

module.exports = {
    createPost,
    updatePost,
    getPosts
}

async function getPosts(req, res) {
  return(
    console.log('hit')
  )
}

async function updatePost(req, res) {
  return(
    console.log('hit')
  )
}

async function createPost(req, res) {
  try {
    const newPost = await PostMessage.createPost(req.body);
    
    await newPost.save();
      res.status(200).json(newPost);
  } catch (error) {
      res.status(400).json({ message: error.message})
  }
  }
