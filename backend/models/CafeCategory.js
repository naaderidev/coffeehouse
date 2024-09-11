const mongoose = require("mongoose");

const cafeCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    subtitle: {
      type: String,
      required: true,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
    icon: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

let CafeCategoryModel =
  mongoose.model?.CafeCategory ||
  mongoose.model("CafeCategory", cafeCategorySchema);

module.exports = CafeCategoryModel;
