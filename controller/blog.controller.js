let { blogService } = require("../services");


let createBlog = async (req, res) => {
    try {

        console.log(req.body);
        let body = req.body;

        let user = await blogService.createBlog(body);

        res.status(200).json({
            message: "created Blog Success!!",
            user,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


let getBlog = async (req, res) => {
    try {
        console.log(req.body);
        let get = await blogService.getBlog();
        res.status(200).json({
            message: "Get Blog success!",
            get,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let deleteBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let deleteuser = await blogService.deleteBlog(id);
        res.status(200).json({
            message: "deleted Blog success..",
            deleteuser,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let updateBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let update = await blogService.updateBlog(id, body)
        res.status(200).json({
            message: "update Blog successfully",
            update,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


module.exports = { createBlog, getBlog, deleteBlog, updateBlog }