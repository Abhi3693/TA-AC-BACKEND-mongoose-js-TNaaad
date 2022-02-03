let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true, lowercase: true },
  email: { type: String, minlength: 5, maxlength: 20, trim: true, match: /@/ },
  age: { type: Number, default: 18 },
  password: { type: Number, min: 5, max: 20 },
  created: { type: Date, default: new Date() },
});
