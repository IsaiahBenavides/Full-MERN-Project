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
  try {
    const postMessages = await PostMessage.find({}).sort('-updatedAt').exec()
    console.log(postMessages)
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updatePost(req, res) {
  return(
    console.log('hit')
  )
}

async function newPost(req, res) {
  const post = req.body
  console.log(req.body)
  const newPost = await PostMessage.create(post)
  try {
    // console.log(`hit`)
    await newPost.save()
    res.status(200).json(newPost)
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
