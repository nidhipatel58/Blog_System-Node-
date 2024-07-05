let { blogSchema } = require("../models");

let createBlog = (body) => {
    return blogSchema.create(body)
}

let getBlog = () => {
    return blogSchema.find();
}

let deleteBlog = (id) => {
    return blogSchema.findByIdAndDelete(id)
}

let updateBlog = (id, body) => {
    return blogSchema.findByIdAndUpdate(id, body)
}


module.exports={createBlog,getBlog,deleteBlog,updateBlog}