const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Transporation= new mongoose.Schema(
  {
    VechileType: {
      type: String,
    },
    VechileNumber: {
      type: Number,
    },
    DriverName: {
      type: String,
    },
    AmounttoPaid: {
      type: Number,
    },
    
  },

  {
    collection: "transporation",
  }
);

const Transporation = mongoose.model("Transporation", Transporation);
module.exports = Transporation;
