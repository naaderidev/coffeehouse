const express = require("express");
const ProductModel = require("./../models/Product");

const productRouter = express.Router();

// **GET
productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

// **GET Main Product
productRouter.get("/:productID", async (req, res) => {
  try {
    let productID = req.params.productID;
    let mainProduct = await ProductModel.findOne({ _id: productID });
    return res.status(200).json({
      mainProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Product
productRouter.post("/", async (req, res) => {
  try {
    let newProduct = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      selling: req.body.selling,
      category: req.body.category,
      brand: req.body.brand,
      count: req.body.count,
      type: req.body.type,
      roasting: req.body.roasting,
      grinding: req.body.grinding,
      caffeine: req.body.caffeine,
      aroma: req.body.aroma,
      taste: req.body.taste,
      price: req.body.price,
      weight: req.body.weight,
      image: req.body.image,
      isOnSale: req.body.isOnSale,
      discount: req.body.discount,
    };
    await ProductModel.create(newProduct);
    return res
      .status(201)
      .json({ message: "new product inserted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = productRouter;
