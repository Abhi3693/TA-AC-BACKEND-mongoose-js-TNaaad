let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to Data base")
})

let app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Welcome</h1>")
})

app.listen(2345);