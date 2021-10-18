import { Application, Router } from "express";

const fs = require("fs");
const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
import { MongoClient } from "mongodb";
import { StorageEngine } from "multer";

dotenv.config();

var DB:Promise<MongoClient> = new Promise((resolve, reject):void => {
    MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jujqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        (err:Error, db:MongoClient):void => {
            if(err) console.error(err);

            resolve(db);
        }
    );
});

const app:Application = express();

const pages:Router = express.Router();
const api:Router = express.Router();
const storage:StorageEngine = multer.diskStorage({
    destination: (req:Express.Request, file:Express.Multer.File, cb:(error: Error | null, destination: string) => void) => {
      	cb(null, __dirname + "/public/uploads");
    },
    filename: (eq:Express.Request, file:Express.Multer.File, cb:(error: Error | null, destination: string) => void) => {
      	cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(upload.array("file"));
app.use("/pages", pages);
app.use("/api", api);

app.get("/", (req, res):void => {
    res.send("Hello, World!");
});

app.listen(process.env.PORT || 3030, ():void => console.log("Listening on port 3030"));