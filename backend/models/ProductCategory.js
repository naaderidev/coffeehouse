const mongoose = require("mongoose");

const ProductCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    titlePersian: {
      type: String,
      required: true,
      maxLength: 50,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

let ProductCategoryModel =
  mongoose.model?.ProductCategory ||
  mongoose.model("ProductCategory", ProductCategorySchema);

module.exports = ProductCategoryModel;
