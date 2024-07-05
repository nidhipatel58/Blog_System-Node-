let express = require("express");
let route = express.Router();
let { blogController } = require("../controller");
const  validate = require("../middleware/validate");
const blogValidation = require("../validations");



route.post("/create",validate(blogValidation.blog) ,blogController.createBlog);
route.get("/get/:id", blogController.getBlog);
route.delete("/delete/:id", blogController.deleteBlog);
route.put("/update/:id",validate(blogValidation.blog), blogController.updateBlog);

    

module.exports = route;
