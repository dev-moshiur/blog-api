const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true,},
  password: {type: String, required: true},
  image: {type: String, required: true},
  profession: {type: String, required: true},
  bio: {type: String, required: true},
  
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;