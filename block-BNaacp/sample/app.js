//  Requires

let express = require("express");
let mongoose = require("mongoose");

let User = require("./models/user");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to Data Base");
});

let app = express();

// Intansiate

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Middlewares

// Routes

app.get("/users", (req,res, next)=>{
    User.find({}, (err, users)=>{
        if(err) return next(err);
        res.json({users: users});
    });
});

app.get("/users/:id",(req,res,next)=>{
    let id = req.params.id;
    // User.findOne({_id: id}, (err, user)=>{
    //     if(err) return next(err);
    //     res.json(user);
    // });

    User.findById(id, (err, user)=>{
        if(err) return next(err);
        res.json(user);
    });

    // User.find({_id: id}, (err, user)=>{
    //     if(err) return next(err);
    //     res.json(user);
    // });
});

app.post("/users", (req,res,next)=>{
    User.create(req.body, (err, user)=>{
        if(err) return next(err);
        res.json(user);
    });
});

app.put("/users/:id",(req,res,next)=>{
    let id = req.params.id;
    // User.update({_id: id}, req.body ,(err, user)=>{
    //     if(err) return  next(err);
    //     res.send(user);
    // });

    // User.updateOne({_id: id}, req.body ,(err, user)=>{
    //     if(err) return next(err);
    //     res.send(user);
    // });

    User.findByIdAndUpdate(id , req.body , {new:true}, (err, user)=>{
        if(err) return next(err);
        res.send(user);
    });
});

app.delete("/users/:id", (req,res)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id,(err, user)=>{
        if(err) return next(err);
        res.send(`${user.name} was deleted`);
    });
});

// error

app.use((req,res)=>{
    res.send("<h1>Page Not Found: 404</h1>");
});

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(2333);