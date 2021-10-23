const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authentication");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
