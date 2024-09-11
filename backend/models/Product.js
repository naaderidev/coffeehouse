const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    selling: {
      type: Number,
      required: true,
      maxLength: 100,
    },
    subtitle: {
      type: String,
      required: true,
      maxLength: 100,
    },
    category: {
      type: String,
      required: true,
      maxLength: 50,
    },
    brand: {
      type: String,
      required: true,
      maxLength: 50,
    },
    count: {
      type: Number,
      required: true,
      maxLength: 100,
    },
    type: {
      type: String,
      required: true,
      maxLength: 50,
    },
    roasting: {
      type: String,
      required: true,
      maxLength: 50,
    },
    grinding: {
      type: String,
      required: true,
      maxLength: 50,
    },
    caffeine: {
      type: String,
      required: true,
      maxLength: 50,
    },
    aroma: {
      type: String,
      required: true,
      maxLength: 50,
    },
    taste: {
      type: String,
      required: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 100,
    },
    weight: {
      type: Number,
      required: true,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
    isOnSale: {
      type: Boolean,
      required: false,
    },
    discount: {
      type: Number,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

let ProductModel =
  mongoose.model?.Product || mongoose.model("Product", productSchema);
  
module.exports = ProductModel;
