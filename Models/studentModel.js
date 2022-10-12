const mongoose = require("mongoose");
const studentModel = mongoose.model("students", {
  // {
  //     "_id": {
  //       "$oid": "6345ac6f776d131639b18b0a"
  //     },
  //     "name": "Syed Zeeshan",
  //     "age": 22,
  //     "city": "Nanded"
  //   }
  name: { type: String },
  age: { type: Number },
  city: { type: String },
});
module.exports = studentModel;
