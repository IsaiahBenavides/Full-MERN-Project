const PostMessage = require('../../models/postMessage')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

module.exports = {
    newPost,
    updatePost,
    getPosts,
    deletePost,
}

async function deletePost(req, res) {
  try {
    const targetPost = await PostMessage.findByIdAndDelete(req.params.id)
    res.status(200).json(targetPost)
  } catch (error) {
    res.status(400).json(error);
  }
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
  try {
    const { id: _id } = req.params
    console.log(_id)
    const post = req.body
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
    // console.log(targetPost)
    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(400).json(error);
  }
}

async function newPost(req, res) {
  const post = req.body
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
