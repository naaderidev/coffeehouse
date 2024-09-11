const mongoose = require("mongoose");

const menuCategorySchema = mongoose.Schema(
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

let MenuCategoryModel =
  mongoose.model?.MenuCategory ||
  mongoose.model("MenuCategory", menuCategorySchema);

module.exports = MenuCategoryModel;
