// 1.name -> string
// 2.email -> string
// 3.age -> number


let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {type:String,lowercase: true} ,
    age: {type: Number, default: 0},
    createdAt: {type: Date, default: new Date()},
    password: {type:Number, min:5},
    favourites:[String],
},{timestamps:true});


let User = mongoose.model("User", userSchema);

module.export = User;