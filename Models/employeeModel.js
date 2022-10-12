const mongoose = require("mongoose");

const employeeModel = mongoose.model("empoyeels", {
  //   "name": "sohel",
  //   "address": {
  //     "dist": "nanded",
  //     "city": "nanded",
  //     "state": "MH"
  //   }
  name: { type: String },
  address: {
    dist: { type: String },
    city: { type: String },
    state: { type: String },
  },
});
module.exports = employeeModel;
