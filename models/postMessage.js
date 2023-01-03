const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
},{
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});



module.exports = mongoose.model("PostMessage", postSchema);
