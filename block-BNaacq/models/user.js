let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type:String},
    email: String,
    age: { type: Number, default: 0},
});

let User = mongoose.model("User", userSchema);
module.exports = User;