const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  businessYearDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
});

const CUSTOMERS = mongoose.model("customers", customersSchema);
module.exports = CUSTOMERS;
