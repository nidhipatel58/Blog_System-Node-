let mongoose = require("mongoose");

function dbconnect() {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Database connectes success:)");
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = dbconnect;
