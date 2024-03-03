const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const Post = mongoose.model("posts", postSchema);

module.exports = Post;