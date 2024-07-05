let express = require("express");
let route = express.Router();
let { userController } = require("../controller");
let  validate = require("../middleware/validate");
let { userValidation } = require("../validations");



route.post("/register", validate(userValidation.user),userController.register);
route.get("/get/:id", userController.getUser);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id", userController.updateUser)


route.post("/login",userController.login);

module.exports = route;