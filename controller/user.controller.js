let { userService } = require("../services");
let { createToken } = require("../middleware/auth")


let register = async (req, res) => {
    try {

        console.log(req.body);
        let body = req.body;

        let user = await userService.register(body);

        res.status(200).json({
            message: "Register Success!!",
            user,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let getUser = async (req, res) => {
    try {
        console.log(req.body);
        let user = await userService.getUser();
        res.status(200).json({
            message: "Get user success!",
            user,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let deleteUser = async (req, res) => {

    try {
        let { id } = req.params;
        let user = await userService.deleteUser(id);
        res.status(200).json({
            message: "deleted user success..",
            user,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let update = await userService.updateUser(id, body)
        res.status(200).json({
            message: "update user successfully",
            update,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let login = async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await userService.findUser(email)
        console.log(user);

        if (!user) {
            throw new Error("user not found")
        }

        if (user.password != password) {
            throw new Error("password is invalid")
        }

        let token = createToken({ user });
        console.log(token);

        res.cookie(token, "token")

        res.status(200).json({
            meassage: "login Successfully!",
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let getProfile = (req, res) => {

  let user = req.user
    res.status(200).json({
        message: "Profile get success",
        user,
    })

}



module.exports = { register, getUser, deleteUser, updateUser, login, getProfile }