const mongoose = require("mongoose");

var Company = mongoose.model(
  "Company",
  {
    name: { type: String },
    description: { type: String },
    contact_no: { type: String },
    email: { type: String },
    logo: { type: String },
    state: { type: String },
    city: { type: String },
  },
  "companys"
);

module.exports = { Company };
