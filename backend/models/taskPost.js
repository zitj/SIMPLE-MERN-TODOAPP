const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const TaskPostSchema = new Schema({
    task: String,
});

// Model
const TaskPost = mongoose.model('TaskPost', TaskPostSchema);

module.exports = TaskPost;