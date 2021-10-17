"use strict";
exports.__esModule = true;
var fs = require("fs");
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello, World!");
});
app.listen(process.env.PORT || 3030, function () { return console.log("Listening on port 3030"); });
