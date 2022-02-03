// Requires

let mongoose = require("mongoose");
let express = require("express");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to dataBase");
});

// Initialse the server

let app = express();


//  Middlewares


// routes

app.get("/", (req,res)=>{
    res.send("<h1>This is index page</h1>")
});

// error middlewares

app.use((req,res,next)=>{
    res.send("<h1>Page Not Found: 404</h1>")
});

app.use((err,req,res,next)=>{
    res.send(`<h1>${err}</h1>`)
})

app.listen(7654);