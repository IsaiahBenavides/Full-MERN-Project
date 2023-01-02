const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  }
},{
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});


postSchema.methods.createPost = async function () {
  const post = this
  console.log(post)
  return post.save()
};

module.exports = mongoose.model("PostMessage", postSchema);
