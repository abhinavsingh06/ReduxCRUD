const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
