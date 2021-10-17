import { Application } from "express";

const fs:object = require("fs");
const express:Function = require("express");

const app:Application = express();

app.get("/", (req, res):void => {
    res.send("Hello, World!");
});

app.listen(process.env.PORT || 3030, ():void => console.log("Listening on port 3030"));