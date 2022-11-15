const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');

const app = express();
dotenv.config()
app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const result = notes.find((n) => n._id === req.params.id);
    // console.log(req.params);
    res.json(result);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));