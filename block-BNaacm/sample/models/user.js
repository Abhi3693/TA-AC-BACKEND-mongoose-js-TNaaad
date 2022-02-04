let mongoose = require("mongoose");


let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type:String, required: true},
    email:{type:String, match: /@/, },
    age: {type: Number, max: 60, min: 18, default: 18},
    address: {
        village: String,
        city: String,
        State: String,
        Pin: {type: Number, required: true, max:6, min: 5}
    }
})

let user = mongoose.model("Artice", userSchema);

module.exports = user;