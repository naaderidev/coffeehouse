const mongoose = require("mongoose");

const menuSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    category: {
      type: String,
      required: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 100,
    },
    ingredient: {
      type: String,
      required: true,
      maxLength: 150,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
    firstTag: {
      type: String,
      required: true,
      maxLength: 50,
    },
    secondTag: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

let MenuModel = mongoose.model?.Menu || mongoose.model("Menu", menuSchema);

module.exports = MenuModel;
