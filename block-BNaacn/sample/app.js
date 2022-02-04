let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to Data Base");
});

let app = express();

app.get("/", (req,res)=>{
    res.send("Welcome model in express Js");
});

app.listen(1234);
