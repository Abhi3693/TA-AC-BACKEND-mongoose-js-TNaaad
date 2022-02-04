let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    discription:String,
    noOfPages: {type: Number, max: 5, min: 1, default: 1},
    author: Schema.Types.ObjectId
})


let Article = mongoose.model("Artice", articleSchema);

module.export = Article;