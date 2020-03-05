const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  firstname: String,
  lastname: String
});

module.exports = mongoose.model("Users", userSchema);
