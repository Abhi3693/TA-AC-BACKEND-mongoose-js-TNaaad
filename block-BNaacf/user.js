let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    favourite: [String],
    marks: [Number],
    address: {
        village:String,
        city: String,
        State: String,
        pin: Number,
        user: Schema.Type.objectId
    }
})