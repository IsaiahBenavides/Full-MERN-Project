const PostMessage = require('../../models/postMessage')
const mongoose = require('mongoose')

module.exports = {
    createPost,
    updatePost,
    getPosts
}

async function getPosts(req, res) {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages)
    res.status(200).json(postMessages)
} catch (error) {
    res.status(404).json({ message: error.message})
}
}

async function updatePost(req, res) {
  const { id: _id } = req.params
    const post = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost)
}

async function createPost(req, res) {
  const post = req.body;

  const newPost = new PostMessage(post)

  try {
      await newPost.save();

      res.status(200).json(newPost);
  } catch (error) {
      res.status(400).json({ message: error.message})
  }
  }