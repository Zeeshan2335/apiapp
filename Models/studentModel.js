const mongoose = require("mongoose");
const studentModel = mongoose.model("students", {
  name: { type: String },
  age: { type: Number },
  city: { type: String },
});
module.exports = studentModel;
