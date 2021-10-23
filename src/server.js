const path = require("path");
const express = require("express");
const server = express();
const router = require("./route");

server
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, "../public")))
    .use("/", express.static(path.join(__dirname, "views")))
    .use(router)
    .listen(8080);
