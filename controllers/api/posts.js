const PostMessage = require('../../models/postMessage')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

module.exports = {
    newPost,
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

async function newPost(req, res) {
  try {
    console.log('hit')
    const post = await PostMessage.create(req.body)
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json(error);
  }
  // try {
  //   const newPost = await PostMessage.createPost(req.body);
    
  //   await newPost.save();
  //     res.status(200).json(newPost);
  // } catch (error) {
  //     res.status(400).json({ message: error.message})
  // }
  }
