let jwt = require("jsonwebtoken");


let createToken = (data) => {
    console.log(data, "jwt");
    let user = jwt.sign(data, process.env.SCERET)
    return user;
}





module.exports = { createToken}