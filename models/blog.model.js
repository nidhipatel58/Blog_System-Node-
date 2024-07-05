let mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String
    },
    tags: {
        type: String
    },
    commemts: {
        type: String,
        require: true
    }
});

let blog=mongoose.model("Blog",blogSchema);
module.exports=blog;