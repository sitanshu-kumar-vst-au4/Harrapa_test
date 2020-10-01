const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Transaction = new mongoose.Schema(
  {
    Date: {
      type: Date,
    },
    FarmerName: {
      type: String,
    },
    Vegetabeles: {
      type: Array,
    },
    Quantity: {
      type: Number,
    },
    
  },

  {
    collection: "transaction",
  }
);

const Transaction = mongoose.model("Transaction", Transaction);
module.exports = Transaction;
