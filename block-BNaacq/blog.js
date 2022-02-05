let express = require("express");
let mongoose = require("mongoose");
let User = require("./models/user");
let Comments = require("./models/comments");
let Article = require("./models/article");

mongoose.connect("mongodb://localhost/blog", (err)=>{
    console.log(err ? err : "Connected to Blog Data Base");
});

let app = express();

app.use(express.json());
app.use(express.urlencoded());


app.get("/users/:id", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err,user)=>{
        if(err) return next(err);
        res.json(user);
    });
});

app.get("/users", (req,res,next)=>{
    User.find({}, (err,users)=>{
        if(err) return next(err);
        res.json({users: users});
    });
});

app.post("/user", (req,res,next)=>{
    console.log(req.body);
    User.create(req.body, {new:true},(err,user)=>{
        console.log(err, user);
        if(err) return next(err);
        res.json(user);
    });
});


app.post("/comment", (req,res,next)=>{
    Comments.create(req.body, {new:true},(err,user)=>{
        if(err) return next(err);
        res.json(user);
    });
});

app.post("/article", (req,res,next)=>{
    Article.create(req.body, {new:true},(err,user)=>{
        if(err) return next(err);
        res.json(user);
    });
});


app.use((req,res)=>{
    res.send(`<h1>Page Not Found: 404</h1>`)
});

app.use((err,req,res,next)=>{
    res.send(`<h1>${err}</h1>`)
})

app.listen(1222);