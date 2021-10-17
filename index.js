const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(process.env.PORT || 3030, () => console.log("Listening on port 3030"));