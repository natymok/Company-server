const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    stockName: {
      type: String,

      trim: true,
    },
    Description: {
      type: String,
    },
    amount: {
      type: Number,
    },
    price: {
      type: Number,
    },
    totalsell: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Stock", userSchema);
