const express = require("express");
const router = express.Router();
const { createUser, checkUser } = require("./controllers/userHandler");

router.post("/new", createUser).post("/login", checkUser);

module.exports = router;
