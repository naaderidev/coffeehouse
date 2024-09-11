const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

let BrandModel = mongoose.model?.Brand || mongoose.model("Brand", brandSchema);

module.exports = BrandModel;
