const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Farmer = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    villageName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },

  {
    collection: "farmer",
  }
);

const Farmer = mongoose.model("Farmer", Farmer);
module.exports = Farmer;
