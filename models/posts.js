const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    username: String,
    avatar:String,
    imgUrl:String,
    caption:String
}, {timestamps: true})


const Post = mongoose.model('Post', postSchema);

module.exports.Post = Post