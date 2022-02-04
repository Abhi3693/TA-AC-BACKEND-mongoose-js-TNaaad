let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to DataBase");
});

let app = express();

app.get("/", (req,res)=>{
    res.send("Welcome")
});

app.listen(2345);
