"use strict";
exports.__esModule = true;
var fs = require("fs");
var express = require("express");
var dotenv = require("dotenv");
var mongodb_1 = require("mongodb");
dotenv.config();
var DB = new Promise(function (resolve, reject) {
    mongodb_1.MongoClient.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@cluster0.jujqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", function (err, db) {
        if (err)
            console.error(err);
        resolve(db);
    });
});
var app = express();
var pages = express.Router();
app.get("/", function (req, res) {
    res.send("Hello, World!");
});
app.listen(process.env.PORT || 3030, function () { return console.log("Listening on port 3030"); });
