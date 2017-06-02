const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
});

//Create the model class
const ModelClasss = mongoose.model('user',userSchema);

//Export model
module.exports=ModelClasss;
