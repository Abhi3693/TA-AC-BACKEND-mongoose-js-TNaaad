
// - village -> String
// - city -> String
// - state -> String
// - pin -> number
// - user -> ObjectId of User from user schema
// Q. Update address schema to contain required validators for state and city field.
// Q. create model for address schema created above and export it.



let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    village: String,
    city: {type:String,required: true} ,
    state: {type:String,required: true} ,
    pin: Number,
    user:Schema.Types.ObjectId,
    
},{timestamps:true})

let Address = mongoose.model("article", articleSchema);

module.export = Address;