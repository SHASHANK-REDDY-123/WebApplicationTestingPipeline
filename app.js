const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Web Application Testing Pipeline");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});